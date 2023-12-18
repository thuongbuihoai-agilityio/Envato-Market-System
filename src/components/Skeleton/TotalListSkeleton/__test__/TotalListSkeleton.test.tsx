import { render } from '@testing-library/react';

// Components
import { TotalListSkeleton } from '@app/components';

describe('TotalListSkeleton component', () => {
  it('renders correctly', () => {
    const { container } = render(<TotalListSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
