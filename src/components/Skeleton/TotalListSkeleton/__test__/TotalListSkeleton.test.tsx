import { render } from '@testing-library/react';
import TotalListSkeleton from '..';

describe('TotalListSkeleton component', () => {
  it('renders correctly', () => {
    const { container } = render(<TotalListSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
