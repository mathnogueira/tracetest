/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type LinterResultPluginRule struct {
	Id string `json:"id,omitempty"`

	Name string `json:"name,omitempty"`

	Description string `json:"description,omitempty"`

	ErrorDescription string `json:"errorDescription,omitempty"`

	Passed bool `json:"passed,omitempty"`

	Weight int32 `json:"weight,omitempty"`

	Tips []string `json:"tips,omitempty"`

	Results []LinterResultPluginRuleResult `json:"results,omitempty"`

	Level string `json:"level,omitempty"`
}

// AssertLinterResultPluginRuleRequired checks if the required fields are not zero-ed
func AssertLinterResultPluginRuleRequired(obj LinterResultPluginRule) error {
	for _, el := range obj.Results {
		if err := AssertLinterResultPluginRuleResultRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertRecurseLinterResultPluginRuleRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of LinterResultPluginRule (e.g. [][]LinterResultPluginRule), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseLinterResultPluginRuleRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aLinterResultPluginRule, ok := obj.(LinterResultPluginRule)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertLinterResultPluginRuleRequired(aLinterResultPluginRule)
	})
}
