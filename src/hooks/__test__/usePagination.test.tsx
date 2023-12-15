import { renderHook, act } from '@testing-library/react-hooks';

// Hooks
import { usePagination } from '@app/hooks/usePagination';

// Mocks
import { TRANSACTIONS } from '@app/mocks';

describe('usePagination hook', () => {
  it('should initialize with the correct default values', () => {
    const { result } = renderHook(() => usePagination([]));

    expect(result.current.data.limit).toBe(10);
    expect(result.current.data.currentPage).toBe(1);
    expect(result.current.filterData).toEqual([]);
  });

  it('should update limit when handleChangeLimit is called', () => {
    const { result } = renderHook(() => usePagination([]));

    act(() => {
      result.current.handleChangeLimit(20);
    });

    expect(result.current.data.limit).toBe(20);
    expect(result.current.data.currentPage).toBe(1);
  });

  it('should update currentPage when handleChangePage is called', () => {
    const { result } = renderHook(() => usePagination([]));

    act(() => {
      result.current.handleChangePage(2);
    });

    expect(result.current.data.currentPage).toBe(2);
    expect(result.current.data.limit).toBe(10);
  });

  it('should reset currentPage when resetPage is called', () => {
    const { result } = renderHook(() => usePagination([]));

    act(() => {
      result.current.handleChangePage(2);
      result.current.resetPage();
    });

    expect(result.current.data.currentPage).toBe(1);
    expect(result.current.data.limit).toBe(10);
  });

  it('should update currentPage based on search conditions when handleSearchWithPagination is called', () => {
    const { result } = renderHook(() => usePagination(TRANSACTIONS));

    act(() => {
      result.current.handleSearchWithPagination('searchValue', () => {});
    });

    expect(result.current.data.currentPage).toBe(1);
  });
});
