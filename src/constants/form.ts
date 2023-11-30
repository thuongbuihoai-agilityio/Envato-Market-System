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
      message: ERROR_MESSAGES.EMAIL_INVALID,
    },
  },
  PASSWORD: {
    required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
  },
  CONFIRM_PASSWORD: {
    // TODO: Update validate confirm password later
    validate: (val: string, { password }: { password: string }) => {
      if (password && !val) {
        return ERROR_MESSAGES.FIELD_REQUIRED('Confirm password');
      }
      if (password && val !== password) {
        return ERROR_MESSAGES.PASSWORD_NOT_MATCH;
      }
    },
  },
  REMEMBER_ME: {
    required: false,
  },
  AGREE_POLICY: {
    validate: (
      val: boolean,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      { isAcceptPrivacyPolicy, ...fieldValues }: any,
    ) => {
      const isError = Object.values(fieldValues).every((value) => value);

      return !(isError && !val);
    },
  },
};
