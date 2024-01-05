import { FormEvent, memo } from 'react';
import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { Control, Controller } from 'react-hook-form';

// Colors
import { colors } from '@app/themes/bases/colors';

// Types
import { TPinCodeForm } from '@app/layouts/MainLayout';

// Constants
import { AUTH_SCHEMA } from '@app/constants';

export type TPinCodeProps = {
  isDisabled?: boolean;
  onSubmit: (e: FormEvent<HTMLDivElement>) => void;
  onClose: () => void;
  control: Control<TPinCodeForm>;
};

const defaultStyle = {
  caretColor: 'transparent',
  'font-family': 'caption',
  fontSize: '24px',
};

const PinCodeComponent = ({
  isDisabled = false,
  onSubmit,
  onClose,
  control,
}: TPinCodeProps) => (
  <VStack as="form" onSubmit={onSubmit}>
    <HStack justifyContent="center" gap={2}>
      <Controller
        control={control}
        rules={AUTH_SCHEMA.PIN_CODE}
        name="pinCode"
        defaultValue=""
        render={({
          field: { onChange, value, ...rest },
          fieldState: { error, invalid },
        }) => (
          <PinInput
            {...rest}
            errorBorderColor={colors.danger[400]}
            isInvalid={!!error || invalid}
            onChange={onChange}
            value={value}
            mask
            variant="filled"
          >
            <PinInputField sx={defaultStyle} data-testid="pin-input" />
            <PinInputField sx={defaultStyle} />
            <PinInputField sx={defaultStyle} />
            <PinInputField sx={defaultStyle} />
          </PinInput>
        )}
      />
    </HStack>
    <HStack w="full" mx={6} my={4} gap={4}>
      <Button type="submit" isDisabled={isDisabled}>
        Submit
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </HStack>
  </VStack>
);

const PinCode = memo(PinCodeComponent, isEqual);

export default PinCode;
