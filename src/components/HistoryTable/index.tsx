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
  StatusCell,
} from '@components/index';

// Constants
import { PAGE_SIZE, STATUS_LABEL, TOTAL_COUNT } from '@constants/index';

// Types
import { TTransaction } from '@interfaces/index';

// Utils
import { getTransactionHomePage } from '@utils/index';

type TFilterUserProps = {
  histories?: TTransaction[];
};

const HistoryTableComponent = ({
  histories = [],
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

  type TStatus = keyof typeof STATUS_LABEL;

  const columns = useMemo(
    () => [
      {
        title: 'Customer name',
        key: 'name',
        renderHead,
        renderBody: renderNameUser,
      },
      {
        title: 'Date',
        key: 'date',
        renderHead,
      },
      {
        title: 'Amount',
        key: 'spent',
        renderHead,
      },
      {
        title: 'Payment',
        key: 'paymentStatus',
        renderHead,
        renderBody: ({ paymentStatus }: TDataSource): JSX.Element => (
          <StatusCell
            variant={STATUS_LABEL[`${paymentStatus}` as TStatus]}
            text={paymentStatus}
          />
        ),
      },
      {
        title: 'Status',
        key: 'transactionStatus',
        renderHead,
        renderBody: ({ transactionStatus }: TDataSource): JSX.Element => (
          <StatusCell
            variant={STATUS_LABEL[`${transactionStatus}` as TStatus]}
            text={transactionStatus}
          />
        ),
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
      {/* Filter bar */}
      <SearchBar />

      {/* Table users */}
      <Box mt={5}>
        <Table
          columns={columns}
          dataSource={getTransactionHomePage(histories)}
        />
      </Box>

      <Box mt={8}>
        <Pagination pageSize={PAGE_SIZE} totalCount={TOTAL_COUNT} />
      </Box>
    </Box>
  );
};

const HistoryTable = memo(HistoryTableComponent);

export default HistoryTable;
