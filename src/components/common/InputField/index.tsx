import {
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  forwardRef,
  ForwardedRef,
} from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

type TInputFieldProps = Omit<InputProps, 'onChange'> & {
  isValidate?: boolean;
  isError?: boolean;
  errorMessages?: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange: (value: string) => void;
};

const InputComponent = (
  {
    isValidate = false,
    isError = false,
    errorMessages = 'Default error', //
    label,
    leftIcon,
    rightIcon,
    onChange,
    ...rest
  }: TInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const errorStyle:
    | {
        borderColor?: string;
      }
    | boolean = isError && {
    borderColor: 'red',
  };

  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value),
    [onChange],
  );

  return (
    <FormControl isInvalid={isValidate}>
      {/* TODO: Will update later */}
      {label && <FormLabel color="black">{label}</FormLabel>}
      <InputGroup w="inherit">
        {leftIcon && (
          <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
        )}
        <Input
          type="text"
          onChange={handleChangeValue}
          ref={ref}
          {...rest}
          {...errorStyle}
        />
        {rightIcon && (
          <InputRightElement
            as="button"
            _hover={{
              borderColor: 'transparent',
              outline: 'none',
            }}
            _focus={{
              borderColor: 'transparent',
              outline: 'none',
            }}
          >
            {rightIcon}
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage color={isError ? 'red' : 'transparent'}>
        {errorMessages}
      </FormErrorMessage>
    </FormControl>
  );
};

const InputField = memo(forwardRef(InputComponent));

export default InputField;
