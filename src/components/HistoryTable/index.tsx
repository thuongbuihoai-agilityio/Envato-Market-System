import { memo, useCallback, useMemo } from 'react';

// Components
import {
  Table,
  TDataSource,
  CustomerNameCell,
  HeadCell,
  ActionCell,
  StatusCell,
} from '@app/components';

// Constants
import { STATUS_LABEL } from '@app/constants';

// Types
import { TTransaction } from '@app/interfaces';

// Utils
import { getTransactionHomePage } from '@app/utils';

// Hooks
import { TSortField, TSortHandler } from '@app/hooks';

type TFilterUserProps = {
  histories?: TTransaction[];
  onSort?: TSortHandler;
};

const HistoryTableComponent = ({
  histories = [],
  onSort,
}: TFilterUserProps): JSX.Element => {
  const renderHead = useCallback(
    (title: string, key: string): JSX.Element => {
      const handleClick = () => {
        onSort && onSort(key as TSortField);
      };

      return <HeadCell key={title} title={title} onClick={handleClick} />;
    },
    [onSort],
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
    <Table columns={columns} dataSource={getTransactionHomePage(histories)} />
  );
};

const HistoryTable = memo(HistoryTableComponent);

export default HistoryTable;
