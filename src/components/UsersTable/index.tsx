import { memo, useCallback } from 'react';
import areEqual from 'react-fast-compare';

// Components
import { Table, UserInfoCell, StatusCell, ActionCell } from '@app/components';

// Types
import { TEmployee } from '@app/interfaces/user';

// Utils
import { getDataUser } from '@app/utils';

// Constants
import { STATUS_LABEL } from '@app/constants/status';
import { TDataSource } from '@app/interfaces';

type TUsersProps = {
  users: TEmployee[];
  onClickUser?: (id: string) => void;
};

type TStatus = keyof typeof STATUS_LABEL;

const UsersComponent = ({ users, onClickUser }: TUsersProps): JSX.Element => {
  const renderHead = useCallback((): JSX.Element => <></>, []);

  const columns = [
    {
      key: 'info',
      renderHead: renderHead,
      renderBody: ({
        name,
        image,
        position,
        lastPlace,
        lastActive,
      }: TDataSource): JSX.Element => (
        <UserInfoCell
          name={`${name}`}
          imageURL={`${image}`}
          address={`${lastPlace}`}
          time={`${lastActive}`}
          role={`${position}`}
        />
      ),
    },
    {
      key: 'workTime',
      renderHead,
      renderBody: ({ workTime }: TDataSource): JSX.Element => (
        <StatusCell
          variant={STATUS_LABEL[`${workTime}` as TStatus]}
          text={`${workTime}`}
        />
      ),
    },
    {
      key: 'level',
      renderHead,
      renderBody: ({ level }: TDataSource): JSX.Element => (
        <StatusCell
          variant={STATUS_LABEL[`${level}` as TStatus]}
          text={`${level}`}
        />
      ),
    },
    {
      key: 'actions',
      renderHead,
      renderBody: () => <ActionCell />,
    },
  ];

  return (
    <Table
      variant="secondary"
      columns={columns}
      dataSource={getDataUser(users)}
      onClickTableRow={onClickUser}
    />
  );
};

const Users = memo(UsersComponent, areEqual);

export default Users;
