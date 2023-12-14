import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserTable from '..';
import { USERS_MOCK } from '@app/mocks';

describe('UserTable component', () => {
  it('renders correctly', () => {
    const { container } = render(<UserTable users={USERS_MOCK} />);
    expect(container).toMatchSnapshot();
  });

  it('renders children when not loading or in error state', () => {
    render(<UserTable users={USERS_MOCK} />);
    expect(screen.getByText('Abdur Rohman')).toBeInTheDocument();
  });
});
