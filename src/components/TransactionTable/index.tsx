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

type TFilterUserProps = {
  transactions?: TTransaction[];
};

const TransactionTableComponent = ({
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
    <Table
      columns={columns}
      dataSource={getTransactionHomePage(transactions)}
    />
  );
};

const TransactionTable = memo(TransactionTableComponent);

export default TransactionTable;
