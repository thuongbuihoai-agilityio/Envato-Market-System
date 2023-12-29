import { memo, useCallback } from 'react';

// Components
import { Box, Flex, Text, theme } from '@chakra-ui/react';
import { Button, Select } from '@app/components';

// Assets
import { Arrow } from '@app/components/Icons';

// Constants
import { NEXT, PAGE_SIZE, PAGINATION, PREV } from '@app/constants/pagination';

// Interfaces
import { TOption } from '@app/components/common/Select';

interface PaginationProps {
  pageSize?: number;
  currentPage?: number;
  isDisabledPrev?: boolean;
  isDisableNext?: boolean;
  arrOfCurrButtons?: (number | string)[];
  onPageChange?: (direction: string) => void;
  onLimitChange?: (limit: TOption) => void;
  onClickPage?: (currentPage: number) => void;
}

const PaginationComponent = ({
  currentPage = 1,
  pageSize = PAGE_SIZE,
  arrOfCurrButtons = [],
  isDisabledPrev = false,
  isDisableNext = false,
  onPageChange = () => {},
  onLimitChange = () => {},
  onClickPage = () => {},
}: PaginationProps) => {
  const colorFill = theme.colors.gray[400];

  const handleNextPage = () => onPageChange(NEXT);

  const handlePrevPage = () => onPageChange(PREV);

  const renderTitle = useCallback(
    () => (
      <Flex w={20}>
        <Text fontSize={{ lg: 'sm' }}>{pageSize}</Text>
        <Box mt={-1} ml={2}>
          <Arrow color={colorFill} width={18} height={15} />
        </Box>
      </Flex>
    ),
    [colorFill, pageSize],
  );

  return (
    <Flex
      data-testid="pagination"
      w="100%"
      justifyContent={{ base: 'center', lg: 'space-between' }}
    >
      <Flex
        display={{ base: 'none', lg: 'inline-flex' }}
        alignItems="center"
        position="relative"
      >
        <Text w={100} fontSize="sm" fontWeight="semibold" color="text.primary">
          Show result:
        </Text>
        <Box w={70}>
          <Select
            variant="secondary"
            options={PAGINATION}
            renderTitle={renderTitle}
            onSelect={onLimitChange}
          />
        </Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Button
          data-testid="prev-button"
          aria-label="btn-prev"
          variant="iconSecondary"
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          isDisabled={isDisabledPrev}
          onClick={handlePrevPage}
        >
          <Arrow color={colorFill} rotate="90deg" />
        </Button>
        <Flex alignItems="center">
          {arrOfCurrButtons.map((item: string | number) => {
            const isDots = item.toString() === '...';
            const isDisable = currentPage === item || isDots;
            const hoverStyle = isDots
              ? {}
              : {
                  color: 'text.textDollar',
                  bg: 'background.body.quinary',
                };
            const disableStyle = isDots
              ? {}
              : {
                  color: 'text.quaternary',
                  bg: 'background.body.quinary',
                };
            const handleClickPage = () => onClickPage(item as number);
            return (
              <Button
                key={item}
                data-testid={`page-${item}-button`}
                aria-label="btn-pages"
                isDisabled={isDisable}
                mx={0.5}
                h={{ base: 30, '2xl': 53 }}
                fontSize={{ base: 'xs', lg: 'sm' }}
                px={{ base: 4, '2xl': 6 }}
                bg={
                  currentPage === item
                    ? 'background.body.quinary'
                    : 'transparent'
                }
                color={currentPage === item ? 'text.quaternary' : 'gray.400'}
                {...(isDots && { cursor: 'not-allowed' })}
                _hover={hoverStyle}
                _disabled={disableStyle}
                onClick={handleClickPage}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button
          data-testid="next-button"
          aria-label="btn-next"
          variant="iconSecondary"
          cursor={isDisableNext ? 'not-allowed' : ''}
          isDisabled={isDisableNext}
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
