import { render } from '@testing-library/react';
import { Status } from '@interfaces/status';
import '@testing-library/jest-dom';
import StatusLabel from '..';

describe('StatusLabel Component', () => {
  it('renders with the correct variant for FULL_TIME', () => {
    const { getByText } = render(<StatusLabel value={Status.FULL_TIME} />);
    const tag = getByText(Status.FULL_TIME);

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for PART_TIME', () => {
    const { getByText } = render(<StatusLabel value={Status.PART_TIME} />);
    const tag = getByText(Status.PART_TIME);

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for SENIOR_LEVEL', () => {
    const { getByText } = render(<StatusLabel value={Status.SENIOR_LEVEL} />);
    const tag = getByText(Status.SENIOR_LEVEL);

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for JUNIOR_LEVEL', () => {
    const { getByText } = render(<StatusLabel value={Status.JUNIOR_LEVEL} />);
    const tag = getByText(Status.JUNIOR_LEVEL);

    expect(tag).toBeInTheDocument();
  });

  it('renders with no variant for an empty status', () => {
    const { getByTestId } = render(<StatusLabel value='' />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  test('Should render match with snapshot.', () => {
    const { container } = render(<StatusLabel value={Status.FULL_TIME} />);
    expect(container).toMatchSnapshot();
  });
});
