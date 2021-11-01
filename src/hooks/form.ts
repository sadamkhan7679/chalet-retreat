// import { useState } from 'react';
import {DeepMap, FieldError} from 'react-hook-form'
import {get} from 'lodash'

export type ValidationError<T> = {
  message: string
  errors: Partial<T>
} | null

export type ReactHookFormErrors = DeepMap<Record<string, any>, FieldError>

/**
 * Helper that takes form errors from react-hook-form, and response errors
 * from the server, and returns a relevant error message for a given
 * field.
 *
 * @param errors
 * @param key
 */
export const fieldError = <T>(
  key: string & keyof T,
  errors: {
    form: ReactHookFormErrors
    response: ValidationError<T>
  },
): string | undefined => {
  /**
   * 'key' could be a property path string such as
   * answers[0].value so we'll use _.get to
   * retrieve the error.
   */
  const formError = get(errors.form, key)
  if (formError) {
    return formError.message
  }

  if (errors.response && errors.response.errors) {
    /**
     * If 'key' contained an array index path such as
     * answers[0].value, the server response will
     * return in dot notation: answers.0.value.
     */
    const objKey = key.replace(/\[/g, '.').replace(']', '') as keyof T

    const validationErrors = errors.response.errors[
      objKey
    ] as unknown as string[]
    if (!validationErrors) {
      return
    }

    return validationErrors[0] // Only care about first error
  }

  return
}

/**
 * Similar to fieldError but returns errors for multiple fields.
 *
 * @param errors
 * @returns
 */
export const fieldErrors = <T extends Record<string, any>>(errors: {
  formErrors: ReactHookFormErrors
  responseError: ValidationError<T>
}): {
  [P in keyof T]?: string
} => {
  const formErrors = Object.entries(errors.formErrors).reduce(
    (acc, [key, val]) => {
      acc[key] = val.message
      return acc
    },
    {} as any,
  )

  if (!errors.responseError || !errors.responseError.errors) {
    return formErrors
  }

  const validationErrors = Object.entries(errors.responseError.errors).reduce(
    (acc, [key, errors]) => {
      if (!errors) {
        return acc
      }

      /**
       * Server returns path keys in dot notation (answers.0.value), so we'll
       * convert it to bracket notation for consistency with the
       * form errors.
       */
      const bracketKeyName = key.replace(/\[/g, '.').replace(']', '') as keyof T
      acc[bracketKeyName] = errors[0]
      return acc
    },
    {} as any,
  )

  return {
    ...validationErrors,
    ...formErrors,
  }
}
