import { lazy, memo, useCallback, useMemo, useState } from 'react';

// Components
import { Box, Flex, Text } from '@chakra-ui/react';
import { Button, InputField, Fetching, Select, Lazy } from '@app/components';

// HOCs
import { withErrorBoundary } from '@app/hocs';

// Hooks
import { useDebounce, useEmployee, useSearch } from '@app/hooks';

// Mocks
import { INITIAL_USER } from '@app/mocks';

// Icons
import { Search, ChevronIcon } from '@app/assets/icons';

// Constants
import { FILTER_USER_OPTIONS } from '@app/constants';

// Types
import { TOption } from '@app/components/common/Select';

// Lazy loading components
const UsersTable = lazy(() => import('@app/components/UsersTable'));
const UserCard = lazy(() => import('@app/components/UserCard'));

const User = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [seniorityLevel, setSeniorityLevel] = useState<string>('');
  const { setSearchParam, searchParam } = useSearch<{ jobTitle: string }>({
    jobTitle: '',
  });

  // Users
  const {
    data: users = [],
    isLoading: isEmployeesLoading,
    isError: isEmployeesError,
  } = useEmployee(searchParam.jobTitle);

  const handleClickUser = useCallback((id: string) => {
    setUserId(id);
  }, []);

  const user = useMemo(
    () => (userId ? users.find((user) => user.id === userId) : users[0]),
    [userId, users],
  );

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex alignItems="center" justifyContent="space-between">
        <Text>{label}</Text>
        <ChevronIcon />
      </Flex>
    ),
    [],
  );

  const handleSearchUsersByJobTitle = useDebounce((value: string) => {
    setSearchParam('jobTitle', value);
  }, []);

  const handleFilterUsersBySeniorLevel = useCallback((data: TOption) => {
    setSeniorityLevel(data.value);
  }, []);

  const usersFiltered = useMemo(
    () =>
      seniorityLevel
        ? users.filter((item) => item.level === seniorityLevel)
        : users,
    [users, seniorityLevel],
  );

  return (
    <Flex
      p={12}
      bgColor="background.body.tertiary"
      minH="calc(100vh - 112px)"
      gap={11}
      direction={{ base: 'column', '3xl': 'row' }}
    >
      <Box flex={{ '3xl': 3 }}>
        <Flex
          p={4}
          rounded="lg"
          bg="background.body.quaternary"
          mb={8}
          alignItems="center"
        >
          <InputField
            flex={4}
            variant="no-focus"
            leftIcon={<Search color="#94A3B8" />}
            placeholder="Job Title"
            sx={{
              svg: {
                position: 'absolute',
              },
            }}
            onChange={handleSearchUsersByJobTitle}
          />
          <Flex gap={8}>
            <Box
              w={220}
              px={5}
              borderRight="solid 1px"
              borderLeft="solid 1px"
              borderColor="border.primary"
              display={{ base: 'none', xl: 'block' }}
            >
              <Select
                options={FILTER_USER_OPTIONS}
                variant="no-background"
                renderTitle={renderTitle}
                onSelect={handleFilterUsersBySeniorLevel}
              />
            </Box>
            <Button
              size="md"
              bg="background.component.quaternary"
              fontWeight="medium"
              sx={{
                py: 7,
                borderRadius: 'lg',
                display: { base: 'none', md: 'inline-flex' },
                _hover: {
                  bg: 'background.component.quaternary',
                },
              }}
            >
              Search
            </Button>
          </Flex>
        </Flex>
        <Fetching isLoading={isEmployeesLoading} isError={isEmployeesError}>
          <Lazy>
            <UsersTable users={usersFiltered} onClickUser={handleClickUser} />
          </Lazy>
        </Fetching>
      </Box>
      <Box flex={1} pt={20}>
        <Lazy>
          <UserCard user={user || INITIAL_USER} />
        </Lazy>
      </Box>
    </Flex>
  );
};

const UsersPage = memo(withErrorBoundary(User));

export default UsersPage;
