export const getCurrentYear = (): number => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

/**
 *
 * @param dateOfExpired
 * @returns
 */
export const getExpireTime = (dateOfExpiry: number): number =>
  Date.now() + dateOfExpiry * 24 * 60 * 60 * 1000; // currentTime + dateOfExpiry * hour * minutes * seconds * milliseconds

export const getCurrentTime = (): number => Date.now();
