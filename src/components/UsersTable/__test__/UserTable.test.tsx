import { render, screen } from '@testing-library/react';
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

  it('should renders children by text', () => {
    render(<UserTable users={USERS_MOCK} />);

    expect(screen.getByText('Abdur Rohman')).toBeInTheDocument();
  });
});
