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
} from '@chakra-ui/react';

type TInputFieldProps = Omit<InputProps, 'onChange'> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange: (value: string) => void;
};

const InputComponent = (
  { leftIcon, rightIcon, onChange, ...rest }: TInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value),
    [onChange],
  );

  return (
    <InputGroup w="inherit">
      {leftIcon && (
        <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
      )}
      <Input type="text" onChange={handleChangeValue} ref={ref} {...rest} />
      {rightIcon && (
        <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>
      )}
    </InputGroup>
  );
};

const InputField = memo(forwardRef(InputComponent));

export default InputField;
