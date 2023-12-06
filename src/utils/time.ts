export const getCurrentYear = (): number => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

/**
 *
 * @param startDate (seconds)
 * @param dateOfExpiry
 * @returns
 */
export const getExpireTime = (
  startDate: number,
  dateOfExpiry: number,
): number => startDate + dateOfExpiry * 24 * 60 * 60; // startDate + dateOfExpiry * hour * minutes * seconds

export const getCurrentTimeSeconds = (): number => Date.now() / 1000;
