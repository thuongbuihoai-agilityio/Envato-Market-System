import { FormEvent, memo } from 'react';
import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  VStack,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

// Colors
import { colors } from '@app/themes/bases/colors';

export type TPinCodeProps = {
  isError: boolean;
  isInvalid: boolean;
  isDisabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLDivElement>) => void;
};

const PinCodeComponent = ({
  isDisabled = false,
  isError,
  isInvalid,
  value,
  onSubmit,
  onChange,
}: TPinCodeProps) => (
  <VStack as="form" onSubmit={onSubmit}>
    <HStack justifyContent="center" gap={2}>
      <PinInput
        errorBorderColor={colors.danger[400]}
        isInvalid={isError || isInvalid}
        onChange={onChange}
        value={value}
      >
        <PinInputField data-testid="pin-input" />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
    <Button type="submit" mx={6} my={4} isDisabled={isDisabled}>
      Submit
    </Button>
  </VStack>
);

const PinCode = memo(PinCodeComponent, isEqual);

export default PinCode;
