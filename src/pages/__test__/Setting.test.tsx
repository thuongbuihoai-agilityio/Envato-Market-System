import { render, screen, waitFor } from '@testing-library/react';
import { FAQ_DATA } from '@app/constants';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import Setting from '@app/pages/Setting';

const client = new QueryClient();

const setup = () =>
  render(
    <QueryClientProvider client={client}>
      <Setting />
    </QueryClientProvider>,
  );

describe('Setting Page test cases', () => {
  it('should render correctly', () => {
    const { container } = setup();

    waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('should render section match with the clicked item', async () => {
    setup();

    const faqItem = screen.getByRole('heading', {
      name: /faq/i,
      hidden: true,
    });

    await userEvent.click(faqItem);
    waitFor(() => {
      const faqContent = screen.findByText(
        new RegExp(FAQ_DATA[0].question, 'i'),
      );

      expect(faqContent).toBeDefined();
    });
  });
});
