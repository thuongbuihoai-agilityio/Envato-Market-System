import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { ReactNode, memo, useCallback } from 'react';

export type TCheckboxProps = Omit<CheckboxProps, 'onChange'> & {
  onChange: () => void;
  children: ReactNode;
};

const CheckboxComponent = ({ onChange, children, ...rest }: TCheckboxProps) => {
  const handleChangeValue = useCallback(() => onChange(), [onChange]);
  return (
    <Checkbox onChange={handleChangeValue} {...rest}>
      {children}
    </Checkbox>
  );
};

const CustomCheckbox = memo(CheckboxComponent);

export default CustomCheckbox;
