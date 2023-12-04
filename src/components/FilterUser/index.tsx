import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Img,
  Td,
  Text,
  Th,
  useColorModeValue,
} from '@chakra-ui/react';
import { memo, useCallback, useMemo, useRef } from 'react';
import { Controller } from 'react-hook-form';

// Hooks
import { useForm } from '@hooks/useForm';

// Components
import {
  InputField,
  Select,
  Table,
  Pagination,
  TDataSource,
} from '@components/index';

// Icons
import { Dot, FilterIcon, Search, Sort } from '@assets/icons';

// Themes
import { colors } from '@themes/bases/colors';

// Mocks
import { USERS, SOCIAL_PLATFORM_OPTIONS } from '@mocks/index';

// Constants
import { PAGE_SIZE } from '@constants/pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TFilterUserProps = {
  page?: number;
  tableSize?: number;
  onSelect?: (value: string) => void;
  onSearch?: (value: string) => void;
  onSort?: (sort: { type: string; desc: string }) => void;
  onChangePage?: (currentPage: number) => void;
  onChangeTableSize?: (currentSize: number) => void;
};

// TODO: Will update props later
const FilterComponent = (): JSX.Element => {
  const { control, handleSubmit } = useForm<{
    search: string;
    select: string;
  }>({
    defaultValues: {
      search: '',
      select: '',
    },
  });
  const refForm = useRef<HTMLFormElement>(null);

  const searchIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    '#fff',
  );
  const filterIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    colors.primary[500] ?? '',
  );

  const renderHead = useCallback(
    (title: string): JSX.Element => (
      <Th
        key={title}
        color="text.secondary"
        textTransform="none"
        fontSize="sm"
        py={5}
        px={0}
        sx={{
          minW: {
            base: 170,
            md: 'unset',
          },
        }}
      >
        <Flex alignItems="center" gap={2}>
          {title}
          <IconButton
            aria-label={`This is the icon for ${title}`}
            w={7}
            h={7}
            bgColor="transparent"
            _hover={{
              bgColor: 'transparent',
            }}
          >
            <Sort color={colors.secondary[300]} opacityLeft={1} />
          </IconButton>
        </Flex>
      </Th>
    ),
    [],
  );

  const renderNameUser = useCallback(
    ({ image, name }: TDataSource): JSX.Element => (
      <Td
        py={5}
        px={0}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="left"
      >
        <Flex alignItems="center" gap="10px">
          <Img
            src={`${image}`}
            alt={`Image of ${name}`}
            w={10}
            h={10}
            borderRadius="full"
          />
          <Text fontSize="md" fontWeight="semibold">
            {name}
          </Text>
        </Flex>
      </Td>
    ),
    [],
  );

  const renderActionIcon = useCallback(
    (): JSX.Element => (
      <Td
        py={5}
        px={0}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="left"
        w="50px"
      >
        <Dot />
      </Td>
    ),
    [],
  );

  const renderTitleSelector = useCallback(
    () => (
      <Center
        as="span"
        textAlign="center"
        fontSize="md"
        color="primary.500"
        gap={3}
      >
        <FilterIcon stroke={filterIconColor} />
        Filters
      </Center>
    ),
    [filterIconColor],
  );

  const columns = useMemo(
    () => [
      {
        title: 'Customer name',
        key: 'name',
        renderHead,
        renderBody: renderNameUser,
      },
      {
        title: 'Email',
        key: 'email',
        renderHead,
      },
      {
        title: 'Location',
        key: 'location',
        renderHead,
      },
      {
        title: 'Spent',
        key: 'spent',
        renderHead,
      },
      {
        title: '',
        key: 'action',
        renderBody: renderActionIcon,
      },
    ],
    [renderActionIcon, renderHead, renderNameUser],
  );

  const dataSource = useMemo(
    () =>
      USERS.map((user) => ({
        ...user,
        action: '',
      })),
    [],
  );

  console.log(control);

  return (
    <Box
      as="section"
      bgColor="white"
      minH={300}
      maxW={1897}
      borderRadius={8}
      px={6}
      py={5}
      m="120px auto"
    >
      {/* Filter bar */}
      <HStack
        as="form"
        h={14}
        gap={5}
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Box
          display={{
            base: 'none',
            sm: 'block',
          }}
          flex={1}
        >
          <Controller
            control={control}
            name="search"
            render={({ field: { value, onChange } }) => (
              <InputField
                value={value}
                onChange={onChange}
                placeholder="Search by name, email, or other..."
                variant="secondary"
                leftIcon={<Search color={searchIconColor} />}
              />
            )}
          />
        </Box>
        <Box
          h="100%"
          w={{
            base: '100%',
            sm: '30%',
            lg: '15%',
            xl: '12%',
          }}
        >
          <Controller
            control={control}
            name="select"
            render={({ field: { onChange } }) => (
              <Select
                options={SOCIAL_PLATFORM_OPTIONS}
                renderTitle={renderTitleSelector}
                onSelect={({ value }) => {
                  onChange(value);
                  refForm.current?.submit();
                }}
              />
            )}
          />
        </Box>
      </HStack>

      {/* Table users */}
      <Box mt={5}>
        <Table columns={columns} dataSource={dataSource} />
      </Box>

      <Box mt={8}>
        <Pagination pageSize={PAGE_SIZE} totalCount={100} />
      </Box>
    </Box>
  );
};

const FilterUser = memo(FilterComponent);

export default FilterUser;
