import { Next, Previous } from "@assets/icons";
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { formatNumberButton, formatPagination } from "@utils/helpers";
import { memo, useEffect, useState } from "react"

interface PaginationProps {
  className?: string;
  totalCount?: number;
  pageSize?: number;
  onPageChange?: (offset: number) => void;
}

const PaginationComponent = ({
  className = '',
  totalCount = 0,
  pageSize = 8,
  onPageChange = () => { }
}: PaginationProps) => {
  const [data, setData] = useState({
    currentPage: 1,
    arrOfCurrButtons: []
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
      arrOfCurrButtons
    });

    setData({
      ...data,
      arrOfCurrButtons: tempNumberOfButtons
    });
  }, [currentPage, pageSize, numberOfPage]);

  const handlePrevPage = () => {
    if (currentPage === 1) {
      onPageChange(currentPage);
    } else {
      setData({
        ...data,
        currentPage: currentPage - 1
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
        currentPage: currentPage + 1
      });
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (value: number) => {
    onPageChange(value);
    setData({
      ...data,
      currentPage: value
    });
  };

  return (
    <Flex w='100%' justifyContent='space-between'>
      <Flex alignItems='center'>
        <Text w='100px'>Show result:</Text>
          <Menu>
            <MenuButton color='gray.800' borderWidth={1} borderColor='gray.200' borderRadius='12px' bg='transparent' py='14px' px='10px' w='70px' as={Button} rightIcon={<Previous />}>
              3
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
      </Flex>
      <Flex w='305px' justifyContent='space-between'>
        <Button bg='transparent' w="fit-content" disabled={isDisabledPrev}
          _hover={{
            bg: 'transparent'
          }}
          onClick={handlePrevPage}>
          <Previous />
        </Button>
        <Flex>
          {arrOfCurrButtons.map((item: number, index: number) => {
            const isDots = item.toString() === '...';
            const itemKey = `page-${index}`;
            return (
              <Button
                disabled={isDots}
                key={itemKey}
                w='53px'
                bg='transparent'
                color='gray.400'
                _hover={{
                  color: 'primary.500',
                  bg: 'primary.400'
                }}
                // className={[
                //   `font-primary-medium mx-1.5 2xl:mx-3 text-dark flex items-center justify-center ${currentPage === item ? styles['select'] : styles['unSelect']
                //   } ${isDots ? btnStyles['effect'] : 'cursor-pointer'}`
                // ].join(' ')}
                onClick={() => handlePageClick(item)}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button bg='transparent' w="fit-content" disabled={isDisableNext}
          _hover={{
            bg: 'transparent'
          }}
          onClick={handleNextPage}>
          <Next />
        </Button>
      </Flex>
    </Flex>
  )
}

const Pagination = memo(PaginationComponent);
export default Pagination;
