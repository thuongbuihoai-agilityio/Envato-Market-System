import { Box, Image, Select, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Controller } from 'react-hook-form';

// Icons
import { ChevronIcon } from '../Icons';

// Constants
import { IMAGES } from '@app/constants';

// Components
import { TTransferControl } from '.';

const UserSelectorComponent = ({ control }: TTransferControl): JSX.Element => (
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
        render={() => (
          <Select
            size="lg"
            sx={{
              paddingLeft: '50px',
            }}
            borderColor="border.secondary"
            color="text.primary"
            icon={<ChevronIcon />}
          >
            <option value="debit" color="text.primary">
              Debit
            </option>
          </Select>
        )}
      />

      <Image
        src={IMAGES.DEBIT_ICON.url}
        alt={IMAGES.DEBIT_ICON.alt}
        fallbackSrc={IMAGES.FALLBACK.url}
        fallbackStrategy="onError"
        boxSize={6}
        position="absolute"
        left={5}
        top="50%"
        transform="translateY(-50%)"
      />

      <Text
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        fontWeight="bold"
        fontSize="sm"
      >
        $ 10,431
      </Text>
    </Box>
  </>
);

export const UserSelector = memo(UserSelectorComponent);
