// FaqPage.test.js
import { render } from '@testing-library/react';

// Components
import * as FaqModule from '@components/index';

// Pages
import FaqPage from '@pages/Setting/Faq';

// Mock the FaqItem component
jest.mock('@components/index', () => ({
  ...jest.requireActual('@components/index'),
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
