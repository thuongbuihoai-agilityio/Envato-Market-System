import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Interfaces
import { Status } from '@interfaces/status';

// Components
import StatusLabel from '..';

describe('StatusLabel Component', () => {
  it('renders with the correct variant for FULL_TIME', () => {
    const { getByTestId } = render(<StatusLabel value={Status.FULL_TIME} />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for PART_TIME', () => {
    const { getByTestId } = render(<StatusLabel value={Status.PART_TIME} />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for SENIOR_LEVEL', () => {
    const { getByTestId } = render(<StatusLabel value={Status.SENIOR_LEVEL} />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for JUNIOR_LEVEL', () => {
    const { getByTestId } = render(<StatusLabel value={Status.JUNIOR_LEVEL} />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  it('renders with the correct variant for default value', () => {
    const { getByTestId } = render(<StatusLabel />);
    const tag = getByTestId('tag');

    expect(tag).toBeInTheDocument();
  });

  test('Should render match with snapshot.', () => {
    const { container } = render(<StatusLabel value={Status.FULL_TIME} />);
    expect(container).toMatchSnapshot();
  });
});
