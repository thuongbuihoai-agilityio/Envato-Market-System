import { memo, useCallback, useEffect, useState } from 'react';

// Components
import { Box, Flex, Text, theme } from '@chakra-ui/react';
import { Button, Select } from '@components/index';

// Assets
import { Arrow } from '@assets/icons';

// Constants
import { PAGE_SIZE, PAGINATION } from '@constants/pagination';

// Interfaces
import { TOption } from '../Select';
import { PaginationType } from '@interfaces/pagination';

// Utils
import { formatNumberButton, formatPagination } from '@utils/helpers';

interface PaginationProps {
  totalCount?: number;
  pageSize?: number;
  onPageChange?: (offset: number) => void;
}

const PaginationComponent = ({
  totalCount = 0,
  pageSize = PAGE_SIZE,
  onPageChange = () => {},
}: PaginationProps) => {
  const colorFill = theme.colors.gray[400];

  const [data, setData] = useState<PaginationType>({
    currentPage: 1,
    arrOfCurrButtons: [],
  });

  const { currentPage, arrOfCurrButtons } = data;
  const numberOfPage = Math.ceil(totalCount / pageSize);

  const isDisabledPrev = currentPage <= 1;
  const lastPage = Math.floor((totalCount + pageSize - 1) / pageSize);
  const isDisableNext = currentPage === lastPage || currentPage < 1;

  useEffect(() => {
    const tempNumberOfButtons = formatPagination({
      totalCount,
      pageSize,
      currentPage,
      arrOfCurrButtons,
    });

    setData({
      ...data,
      arrOfCurrButtons: tempNumberOfButtons,
    });
  }, [currentPage, pageSize, numberOfPage]);

  const handlePrevPage = useCallback(() => {
    if (currentPage === 1) {
      onPageChange(currentPage);
      return;
    }

    setData({
      ...data,
      currentPage: currentPage - 1,
    });
    onPageChange(currentPage - 1);
  }, []);

  const handleNextPage = useCallback(() => {
    if (currentPage === formatNumberButton(numberOfPage).length) {
      onPageChange(currentPage);
      return;
    }

    setData({
      ...data,
      currentPage: currentPage + 1,
    });
    onPageChange(currentPage + 1);
  }, []);

  const handlePageClick = useCallback((value: number) => {
    onPageChange(value);
    setData({
      ...data,
      currentPage: value,
    });
  }, []);

  const renderTitle = useCallback(
    ({ label }: TOption) => (
      <Flex justifyContent="space-between">
        <Text>{label}</Text>
        <Arrow color={colorFill} width={17} height={17} />
      </Flex>
    ),
    [colorFill],
  );

  return (
    <Flex w="100%" justifyContent="space-between">
      <Flex alignItems="center" position="relative">
        <Text w={100} fontSize="sm" fontWeight="semibold" color="text.primary">
          Show result:
        </Text>
        <Box w={70}>
          <Select
            variant="secondary"
            options={PAGINATION}
            renderTitle={renderTitle}
          />
        </Box>
      </Flex>
      <Flex w="358px" justifyContent="space-between">
        <Button
          variant="iconSecondary"
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          disabled={isDisabledPrev}
          onClick={handlePrevPage}
        >
          <Arrow color={colorFill} rotate="90deg" />
        </Button>
        <Flex>
          {arrOfCurrButtons.map((item: string | number) => {
            const isDots = item.toString() === '...';
            const hoverStyle = isDots
              ? {}
              : {
                  color: 'primary.500',
                  bg: 'background.body.quinary',
                };
            return (
              <Button
                key={item}
                isDisabled={isDots}
                w="53px"
                mx={0.5}
                bg={
                  currentPage === item
                    ? 'background.body.quinary'
                    : 'transparent'
                }
                color={currentPage === item ? 'text.tertiary' : 'gray.400'}
                cursor={isDots ? 'not-allowed' : ''}
                _hover={hoverStyle}
                onClick={() => handlePageClick(item as number)}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button
          variant="iconSecondary"
          cursor={isDisableNext ? 'not-allowed' : ''}
          disabled={isDisableNext}
          onClick={handleNextPage}
        >
          <Arrow color={colorFill} rotate="-90deg" />
        </Button>
      </Flex>
    </Flex>
  );
};

const Pagination = memo(PaginationComponent);
export default Pagination;
