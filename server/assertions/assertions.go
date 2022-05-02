package assertions

import (
	"fmt"

	"github.com/kubeshop/tracetest/traces"
)

type Selector string // TODO: use actual selectors

type Comparator interface {
	Compare(string, string) error
	fmt.Stringer
}

type Assertion struct {
	Attribute  string
	Comparator Comparator
	Value      string
}

func (a Assertion) Assert(spans []traces.Span) AssertionResult {
	results := make([]AssertionSpanResults, len(spans))
	for i, span := range spans {
		results[i] = a.apply(span)
	}
	return AssertionResult{
		Assertion:            a,
		AssertionSpanResults: results,
	}
}

func (a Assertion) apply(span traces.Span) AssertionSpanResults {
	attr := span.Attributes.Get(a.Attribute)
	return AssertionSpanResults{
		Span:        &span,
		ActualValue: attr,
		CompareErr:  a.Comparator.Compare(a.Value, attr),
	}
}

type AssertionResult struct {
	Assertion
	AssertionSpanResults []AssertionSpanResults
}

type AssertionSpanResults struct {
	Span        *traces.Span
	ActualValue string
	CompareErr  error
}

type TestDefinition map[Selector][]Assertion

type TestResult map[Selector]AssertionResult

func Assert(trace traces.Trace, defs TestDefinition) TestResult {
	testResult := TestResult{}
	for selector, asserts := range defs {
		spans := findSpans(trace, selector)
		for _, assertion := range asserts {
			testResult[selector] = assertion.Assert(spans)
		}
	}
	return testResult
}

func findSpans(t traces.Trace, s Selector) []traces.Span {
	// todo: actually implement search
	return []traces.Span{t.RootSpan}
}

var ErrNoMatch = fmt.Errorf("no match")

type ComparatorEq struct{}

func (c ComparatorEq) Compare(expected, actual string) error {
	if expected == actual {
		return nil
	}

	return ErrNoMatch
}

func (c ComparatorEq) String() string {
	return "="
}
