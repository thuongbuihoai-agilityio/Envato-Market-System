import { Box, Select, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Control, Controller } from 'react-hook-form';

// Icons
import { ChevronIcon } from '../Icons';

// Mocks
import { MOCK_USERS_DATA } from '@app/mocks';

// Types
import { TTransfer } from '.';

export type TUseSelectorProps = {
  control: Control<TTransfer>;
};

const UserSelectorComponent = ({ control }: TUseSelectorProps): JSX.Element => (
  <>
    <Text
      fontWeight="bold"
      color="text.primary"
      fontSize="lg"
      mb={3}
      textTransform="capitalize"
    >
      quick transfer
    </Text>

    <Box position="relative">
      <Controller
        control={control}
        name="userId"
        rules={{ required: true }}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field: { onChange, ref: _, ...rest } }) => (
          <Select
            {...rest}
            size="lg"
            sx={{
              paddingLeft: '50px',
            }}
            borderColor="border.secondary"
            color="text.primary"
            icon={<ChevronIcon />}
            onChange={onChange}
          >
            <option selected hidden disabled value="">
              Choose an account to transfer
            </option>
            {MOCK_USERS_DATA.map((user) => (
              <option key={user.id} value={user.id} color="text.primary">
                {user.email}
              </option>
            ))}
          </Select>
        )}
      />
    </Box>
  </>
);

export const UserSelector = memo(UserSelectorComponent);
