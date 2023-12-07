import { Box } from '@chakra-ui/react';
import { memo, useCallback, useMemo } from 'react';

// Components
import {
  Table,
  Pagination,
  TDataSource,
  CustomerNameCell,
  HeadCell,
  ActionCell,
  SearchBar,
} from '@components/index';

// Constants
import { PAGE_SIZE } from '@constants/pagination';

// Types
import { TTransaction } from '@interfaces/transaction';

// Utils
import { getTransactionHomePage } from '@utils/transaction';

// TODO: Will update props later
type TFilterUserProps = {
  transactions?: TTransaction[];
  // page?: number;
  // tableSize?: number;
  // onSelect?: (value: string) => void;
  // onSearch?: (value: string) => void;
  // onSort?: (sort: { type: string; desc: string }) => void;
  // onChangePage?: (currentPage: number) => void;
  // onChangeTableSize?: (currentSize: number) => void;
};

const FilterComponent = ({
  transactions = [],
}: TFilterUserProps): JSX.Element => {
  const renderHead = useCallback(
    (title: string): JSX.Element => <HeadCell key={title} title={title} />,
    [],
  );

  const renderNameUser = useCallback(
    ({ id, image, name }: TDataSource): JSX.Element => (
      <CustomerNameCell key={id} id={id} image={image} name={name} />
    ),
    [],
  );

  const renderActionIcon = useCallback(
    (data: TDataSource): JSX.Element => (
      <ActionCell key={`${data.id}-action`} />
    ),
    [],
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

  return (
    <Box
      as="section"
      bgColor="background.component.primary"
      borderRadius={8}
      px={6}
      py={5}
    >
      <SearchBar />

      {/* Table users */}
      <Box mt={5}>
        <Table
          columns={columns}
          dataSource={getTransactionHomePage(transactions)}
        />
      </Box>

      <Box mt={8}>
        <Pagination pageSize={PAGE_SIZE} totalCount={100} />
      </Box>
    </Box>
  );
};

const FilterUser = memo(FilterComponent);

export default FilterUser;
