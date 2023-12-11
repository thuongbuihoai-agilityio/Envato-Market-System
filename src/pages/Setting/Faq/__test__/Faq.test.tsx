// FaqPage.test.js
import { render } from '@testing-library/react';

// Components
import * as FaqModule from '@app/components';

// Pages
import FaqPage from '@app/pages/Setting/Faq';

// Mock the FaqItem component
jest.mock('@app/components/index', () => ({
  ...jest.requireActual('@app/components/index'),
  FaqItem: jest.fn(({ question, answer }) => (
    <div>
      <div data-testid="question">{question}</div>
      <div data-testid="answer">{answer}</div>
    </div>
  )),
}));

describe('FaqPage', () => {
  it('renders FaqPage component correctly', () => {
    const { asFragment } = render(<FaqPage />);
    const mockedFaqItem = FaqModule.FaqItem;

    expect(mockedFaqItem).toHaveBeenCalledTimes(6);

    expect(asFragment()).toMatchSnapshot();
  });
});
