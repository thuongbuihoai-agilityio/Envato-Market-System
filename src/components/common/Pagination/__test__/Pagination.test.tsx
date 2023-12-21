import { render } from '@testing-library/react';

// Components
import { Pagination } from '@app/components';
import userEvent from '@testing-library/user-event';

const onPageChangeMock = jest.fn();

describe('Pagination render', () => {
  test('Should render match with snapshot.', () => {
    const { container } = render(<Pagination pageSize={10} totalCount={100} />);
    expect(container).toMatchSnapshot();
  });

  it('Handle click page', async () => {
    const { getByTestId } = render(
      <Pagination
        pageSize={10}
        totalCount={100}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextPage = getByTestId('page-3-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it('Handle next page', async () => {
    const { getByTestId } = render(
      <Pagination
        pageSize={8}
        totalCount={100}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextPage = getByTestId('next-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('Handle prev page', async () => {
    const { getByTestId } = render(
      <Pagination
        pageSize={8}
        totalCount={100}
        currentPage={2}
        onPageChange={onPageChangeMock}
      />,
    );

    const nextPage = getByTestId('prev-button');

    await userEvent.click(nextPage);
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it('Handle change limit', async () => {
    const onLimitChangeMock = jest.fn();
    const { getByText } = render(
      <Pagination
        pageSize={8}
        totalCount={100}
        currentPage={2}
        onPageChange={onPageChangeMock}
        onLimitChange={onLimitChangeMock}
      />,
    );

    const selectOption = getByText('50');
    await userEvent.click(selectOption);
    expect(onLimitChangeMock).toHaveBeenCalledWith(50);
  });
});
