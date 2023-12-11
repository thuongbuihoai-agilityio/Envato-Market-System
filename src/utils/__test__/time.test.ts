import { getCurrentYear } from '@app/utils/time';

describe('getCurrentYear', () => {
  it('returns the current year', () => {
    const OriginalDate = global.Date;

    const mockDate = jest.spyOn(global, 'Date');

    mockDate.mockImplementation(
      () => new OriginalDate('2023-01-01T00:00:00.000Z'),
    );

    const result = getCurrentYear();

    mockDate.mockRestore();

    expect(result).toEqual(2023);
  });
});
