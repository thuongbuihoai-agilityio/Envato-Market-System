import { memo } from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { Control, Controller } from 'react-hook-form';

// Utils
import { formatDecimalInput } from '@app/utils';

// Types
import { TAddMoneyForm } from '.';

export type TAddMoneyInputFieldProps = {
  control: Control<TAddMoneyForm>;
};

const AddMoneyInputField = ({
  control,
}: TAddMoneyInputFieldProps): JSX.Element => (
  <Box
    border="1px solid"
    borderColor="border.secondary"
    p={4}
    mt={5}
    borderRadius="lg"
  >
    <Text color="text.secondary"> Enter amount </Text>
    <Flex direction="row" alignItems="center">
      <Text color="text.primary" fontSize="2xl" fontWeight="bold">
        $
      </Text>
      <Controller
        control={control}
        name="amount"
        render={({ field: { value, onChange } }) => {
          // Remove non-numeric characters and leading zeros
          const sanitizedValue = formatDecimalInput(value);

          return (
            <Input
              variant="authentication"
              type="text"
              _dark={{
                border: 'none',
              }}
              sx={{ border: 'none', padding: 0 }}
              color="text.primary"
              fontWeight="bold"
              fontSize="2xl"
              ml={2}
              value={sanitizedValue}
              name="amount"
              onChange={onChange}
            />
          );
        }}
      />
    </Flex>
  </Box>
);

export const AddMoneyInput = memo(AddMoneyInputField);
