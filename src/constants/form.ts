import { ERROR_MESSAGES } from './messages';
import { REGEX } from './regex';

export const AUTH_SCHEMA = {
  FIRST_NAME: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('First Name'),
  },
  LAST_NAME: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Last Name'),
  },
  EMAIL: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
    pattern: {
      value: REGEX.EMAIL,
      message: ERROR_MESSAGES.FIELD_INVALID('Email'),
    },
  },
  PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
  },
  CONFIRM_PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Confirm Password'),
    // TODO: Update validate confirm password later
  },
  REMEMBER_ME: {
    required: false,
  },
  AGREE_POLICY: {
    // TODO: Update validate agreePolicy later
  },
};
