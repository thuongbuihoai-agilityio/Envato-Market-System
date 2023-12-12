export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  EMAIL_INVALID: 'Wrong email format',
  PASSWORD_NOT_MATCH: 'Password don’t match',
  SOMETHING_ERROR: 'Something went wrong!!',
  AUTH_INCORRECT: 'Email or password incorrect',
  ACCOUNT_ALREADY_EXISTS: 'An account using this email address already exists',
  EMPTY_DATA: 'Data is the empty',
  PASS_WORD_SHORT: 'Password must be more than 8 characters',
  PASS_WORD_WEAK:
    'Password contains uppercase, lowercase and special characters',
  PHONE_NUMBER_INVALID: 'Invalid phone number',
  UPDATE_FAIL: 'Update failed',
};
