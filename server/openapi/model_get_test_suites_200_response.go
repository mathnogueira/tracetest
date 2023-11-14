/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type GetTestSuites200Response struct {
	Count int32 `json:"count,omitempty"`

	Items []TestSuiteResource `json:"items,omitempty"`
}

// AssertGetTestSuites200ResponseRequired checks if the required fields are not zero-ed
func AssertGetTestSuites200ResponseRequired(obj GetTestSuites200Response) error {
	for _, el := range obj.Items {
		if err := AssertTestSuiteResourceRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertRecurseGetTestSuites200ResponseRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of GetTestSuites200Response (e.g. [][]GetTestSuites200Response), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseGetTestSuites200ResponseRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aGetTestSuites200Response, ok := obj.(GetTestSuites200Response)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertGetTestSuites200ResponseRequired(aGetTestSuites200Response)
	})
}
