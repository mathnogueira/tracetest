/*
 * TraceTest
 *
 * OpenAPI definition for TraceTest endpoint and resources
 *
 * API version: 0.2.1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type Transaction struct {
	Id string `json:"id,omitempty"`

	Name string `json:"name,omitempty"`

	Description string `json:"description,omitempty"`

	// version number of the test
	Version int32 `json:"version,omitempty"`

	Steps []string `json:"steps,omitempty"`
}

// AssertTransactionRequired checks if the required fields are not zero-ed
func AssertTransactionRequired(obj Transaction) error {
	return nil
}

// AssertRecurseTransactionRequired recursively checks if required fields are not zero-ed in a nested slice.
// Accepts only nested slice of Transaction (e.g. [][]Transaction), otherwise ErrTypeAssertionError is thrown.
func AssertRecurseTransactionRequired(objSlice interface{}) error {
	return AssertRecurseInterfaceRequired(objSlice, func(obj interface{}) error {
		aTransaction, ok := obj.(Transaction)
		if !ok {
			return ErrTypeAssertionError
		}
		return AssertTransactionRequired(aTransaction)
	})
}
