import { Box, HStack, useColorModeValue } from '@chakra-ui/react';
import { memo, useCallback, useMemo } from 'react';
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
  CustomerNameCell,
  HeadCell,
  ActionCell,
} from '@components/index';
import Selector from './Selector';

// Icons
import { Search } from '@assets/icons';

// Themes
import { colors } from '@themes/bases/colors';

// Mocks
import { USERS, MONTHS } from '@mocks/index';

// Constants
import { PAGE_SIZE } from '@constants/pagination';

// TODO: Will update props later
// type TFilterUserProps = {
//   page?: number;
//   tableSize?: number;
//   onSelect?: (value: string) => void;
//   onSearch?: (value: string) => void;
//   onSort?: (sort: { type: string; desc: string }) => void;
//   onChangePage?: (currentPage: number) => void;
//   onChangeTableSize?: (currentSize: number) => void;
// };

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

  const searchIconColor: string = useColorModeValue(
    colors.secondary[400] ?? '',
    '#fff',
  );

  const renderHead = useCallback(
    (title: string): JSX.Element => <HeadCell title={title} />,
    [],
  );

  const renderNameUser = useCallback(
    (data: TDataSource): JSX.Element => <CustomerNameCell {...data} />,
    [],
  );

  const renderActionIcon = useCallback((): JSX.Element => <ActionCell />, []);

  const renderTitleSelector = useCallback(() => <Selector />, []);

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
          console.log(data); // TODO: Remove late
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
                options={MONTHS}
                renderTitle={renderTitleSelector}
                onSelect={({ value }) => onChange(value)}
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
