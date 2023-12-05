import { fireEvent, render } from '@testing-library/react';

// Components
import Pagination from '..';

describe('Pagination render', () => {
  test('Should render match with snapshot.', () => {
    const { container } = render(<Pagination pageSize={8} totalCount={100} />);
    expect(container).toMatchSnapshot();
  });

  it('should simulate on clickPage', () => {
    const onPageChangeMock = jest.fn();

    const { getByTestId } = render(
      <Pagination
        pageSize={8}
        totalCount={100}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextPage = getByTestId('next-button');

    fireEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalled();
  });
});
