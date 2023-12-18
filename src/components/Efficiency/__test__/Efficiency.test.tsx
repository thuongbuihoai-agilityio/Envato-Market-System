import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';

const queryClient = new QueryClient();

// Component
import { Efficiency } from '@app/components';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Efficiency />
    </QueryClientProvider>,
  );

describe('Efficiency component', () => {
  it('renders correctly', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('handles changing the select option', async () => {
    const { getByRole, getByText } = setup();
    const select = getByRole('button');
    await userEvent.click(select);
    const selectOption = getByText('Monthly');
    await userEvent.click(selectOption);

    expect(select.textContent).toBe('Monthly');
  });
});
