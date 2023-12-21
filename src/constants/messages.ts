export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  EMAIL_INVALID: 'Email is invalid',
  PASSWORD_NOT_MATCH: 'Password does not match',
  SOMETHING_ERROR: 'Something went wrong!!',
  AUTH_INCORRECT: 'Email or password is incorrect',
  ACCOUNT_ALREADY_EXISTS: 'This email address is already in used',
  EMPTY_DATA: 'No data found',
  PASS_WORD_SHORT: 'Password must be more than 8 characters',
  PASS_WORD_WEAK:
    'Password contains uppercase, lowercase and special characters',
  PHONE_NUMBER_INVALID: 'Phone number is invalid',
  UPDATE_FAIL: {
    title: 'Update failed',
    description: 'Your profile has not been updated successfully',
  },
  UPLOAD_IMAGE: "Wrong image format. Only 'jpg', 'png' and 'webp' are allowed",
  UPLOAD_IMAGE_SIZE: 'Image size should be less than 32MB',
};

export const SUCCESS_MESSAGES = {
  UPDATE_SUCCESS: {
    title: 'Update success',
    description: 'Your profile has been updated successfully',
  },
};
