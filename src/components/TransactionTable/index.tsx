import { memo, useCallback, useMemo } from 'react';

// Components
import {
  Table,
  TDataSource,
  CustomerNameCell,
  HeadCell,
  ActionCell,
} from '@app/components';

// Types
import { TTransaction } from '@app/interfaces/transaction';

// Utils
import { getTransactionHomePage } from '@app/utils/transaction';

// Hooks
import { TSortField, TSortHandler } from '@app/hooks';

type TFilterUserProps = {
  transactions?: TTransaction[];
  onSort?: TSortHandler;
};

const TransactionTableComponent = ({
  transactions = [],
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
    <Table
      columns={columns}
      dataSource={getTransactionHomePage(transactions)}
    />
  );
};

const TransactionTable = memo(TransactionTableComponent);

export default TransactionTable;
