export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) =>
    `Invalid format of ${fieldName}, please check.`,
  EMAIL_INVALID: 'Email does not follow the correct format.',
  PASSWORD_NOT_MATCH: 'Password does not match',
};
