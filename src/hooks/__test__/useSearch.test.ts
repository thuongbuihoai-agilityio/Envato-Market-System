import { act, renderHook, waitFor } from '@testing-library/react';
import * as reactRouterDom from 'react-router-dom';

// Hooks
import { useSearch } from '@app/hooks';

jest.mock('react-router-dom', () => ({
  useSearchParams: jest.fn(),
}));

describe('useSearch', () => {
  const defaultParams = { param1: 'value1', param2: 'value2' };

  beforeEach(() => {
    jest
      .spyOn(reactRouterDom, 'useSearchParams')
      .mockReturnValue([new URLSearchParams(defaultParams), jest.fn()]);
  });

  it('should initialize with default parameters', () => {
    const { result } = renderHook(() => useSearch(defaultParams));

    expect(result.current.searchParam).toEqual(defaultParams);
    expect(result.current.defaultQuery.toString()).toEqual(
      'param1=value1&param2=value2',
    );
  });

  it('should update search parameter when setSearchParam is called', () => {
    const { result } = renderHook(() => useSearch(defaultParams));

    act(() => {
      result.current.setSearchParam('param1', 'new_value');
    });

    waitFor(() => {
      expect(result.current.searchParam.param1).toEqual('new_value');
    });
  });
});
