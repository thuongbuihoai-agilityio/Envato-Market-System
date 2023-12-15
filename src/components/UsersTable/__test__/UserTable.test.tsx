import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import UserTable from '../index';

// Mocks
import { USERS_MOCK } from '@app/mocks';

describe('UserTable component', () => {
  it('should renders correctly', () => {
    const { container } = render(<UserTable users={USERS_MOCK} />);

    expect(container).toMatchSnapshot();
  });

  it('should renders component', () => {
    render(<UserTable users={USERS_MOCK} />);

    expect(USERS_MOCK).toBeInTheDocument();
  });

  it('should renders children when onclickUser', () => {
    const onClickUser = jest.fn();
    render(<UserTable users={USERS_MOCK} onClickUser={onClickUser} />);

    expect(onClickUser).toHaveBeenCalled();
  });
});
