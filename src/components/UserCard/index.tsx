import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { Box, Flex, Heading, Text, IconButton, Avatar } from '@chakra-ui/react';

// Icons
import { BookMark, ShareNodes } from '@app/assets/icons';

// Images
import { IMAGES } from '@app/constants/images';

// Types
import { TEmployee } from '@app/interfaces';

// Utils
import { formatDecimalNumber } from '@app/utils';

interface userCardProps {
  user: TEmployee;
}

const UserCardComponent = ({ user }: userCardProps) => {
  const {
    firstName,
    lastName,
    position,
    lastActive,
    lastPlace,
    level,
    workTime,
    avatarURL,
    salary,
  } = user || {};

  const iconButtonStyles = {
    variant: 'outline',
    padding: 2,
    rounded: '50%',
    borderColor: 'secondary.350',
    w: 10,
    h: 10,
    _hover: {
      bg: 'primary.500',
      borderColor: 'primary.500',
      svg: { stroke: '#FFF' },
    },
  };

  return (
    <Box px={12} pb={7} bg="background.component.primary" rounded="lg">
      <Avatar
        src={avatarURL}
        borderRadius="xl"
        borderWidth="1px"
        w={16}
        h={16}
        pos="relative"
        left="calc(50% - 32px)"
        top={-8}
      />
      <Flex direction="column" alignItems="center" pb={7} mt={-4}>
        <Heading as="h3" variant="headingXl" color="text.octonary">
          {`${firstName} ${lastName}`}
        </Heading>
        <Text color="text.nonary">
          {`${position} • ${lastPlace} • ${lastActive}`}
        </Text>
        <Flex mt={6} gap={4}>
          <IconButton
            aria-label="Book Mark"
            icon={<BookMark />}
            {...iconButtonStyles}
          />
          <IconButton
            aria-label="Share Nodes"
            icon={<ShareNodes />}
            {...iconButtonStyles}
          />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        gap={6}
        py={7}
        borderY="solid 1px"
        borderColor="border.senary"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text variant="textSm" color="text.denary">
            Experience
          </Text>
          <Text variant="textSm" fontWeight="semibold" color="text.primary">
            2-4 Years
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text variant="textSm" color="text.denary">
            Seniority Level
          </Text>
          <Text variant="textSm" fontWeight="semibold" color="text.primary">
            {level}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text variant="textSm" color="text.denary">
            Employment
          </Text>
          <Text variant="textSm" fontWeight="semibold" color="text.primary">
            {workTime}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text variant="textSm" color="text.denary">
            Salary
          </Text>
          <Text variant="textSm" fontWeight="semibold" color="text.primary">
            ${formatDecimalNumber(salary, true)}
          </Text>
        </Flex>
      </Flex>
      <Box pt={6}>
        <Text variant="textSm" color="text.denary">
          Hiring Agent
        </Text>
        <Flex gap={4} mt={4}>
          <Avatar src={IMAGES.AVATAR.url} w={10} h={10} />
          <Box>
            <Text variant="textSm" fontWeight="semibold" color="text.primary">
              Annette Black
            </Text>
            <Text color="primary.500" variant="textSm">
              HR Specialist •{' '}
              <Text as="span" color="text.nonary" variant="textSm">
                from last week
              </Text>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const UserCard = memo(UserCardComponent, isEqual);

export default UserCard;
