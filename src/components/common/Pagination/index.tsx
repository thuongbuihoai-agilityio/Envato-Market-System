import { memo, useEffect, useState } from 'react';

// Components
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  theme,
} from '@chakra-ui/react';
import { Button } from '@components/index';

// Assets
import { Arrow } from '@assets/icons';

// Constants
import { PAGINATION } from '@constants/pagination';

// Interfaces
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
  pageSize = 8,
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

  const handlePrevPage = () => {
    if (currentPage === 1) {
      onPageChange(currentPage);
    } else {
      setData({
        ...data,
        currentPage: currentPage - 1,
      });
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage === formatNumberButton(numberOfPage).length) {
      onPageChange(currentPage);
    } else {
      setData({
        ...data,
        currentPage: currentPage + 1,
      });
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (value: number) => {
    onPageChange(value);
    setData({
      ...data,
      currentPage: value,
    });
  };

  return (
    <Flex w="100%" justifyContent="space-between">
      <Flex alignItems="center" position="relative">
        <Text
          w="100px"
          fontSize="sm"
          fontWeight="semibold"
          color="text.primary"
        >
          Show result:
        </Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                color="text.primary"
                border="1px"
                borderColor="border.quaternary"
                borderRadius="xl"
                bg="none"
                py={3.5}
                px={2.5}
                w="70px"
                _hover={{
                  bg: 'transparent',
                  borderColor: 'border.quaternary',
                }}
                _active={{
                  bg: 'none',
                }}
                isActive={isOpen}
                rightIcon={<Arrow color={colorFill} />}
              >
                10
              </MenuButton>
              <MenuList
                position="absolute"
                top={12}
                left={24.5}
                mt={{ md: 4 }}
                p={0}
                border="none"
                minWidth="70px"
                bg="background.component.primary"
              >
                {PAGINATION.map((result) => (
                  <MenuItem
                    key={result.id}
                    bg="transparent"
                    _hover={{
                      bg: 'background.component.tertiary',
                      borderColor: 'transparent',
                    }}
                  >
                    <Text>{result.value}</Text>
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
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
