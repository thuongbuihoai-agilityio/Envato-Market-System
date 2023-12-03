import { Next, Previous } from "@assets/icons";
import { Flex, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Button } from "@components/index";
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
                <Text>5</Text>
              </MenuItem>
              <MenuItem minH='48px'>
                <Text>10</Text>
              </MenuItem>
              <MenuItem minH='48px'>
                <Text>50</Text>
              </MenuItem>
            </MenuList>
          </Menu>
      </Flex>
      <Flex w='305px' justifyContent='space-between'>
        <Button
          bg='transparent'
          w="fit-content"
          _hover={{
            bg: 'transparent'
          }}
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          disabled={isDisabledPrev}
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
                bg={currentPage === item ? 'primary.400' : 'transparent'}
                color={currentPage === item ? 'primary.500' : 'gray.400'}
                cursor={isDots ? 'not-allowed' : ''}
                _hover={{
                  color: 'primary.500',
                  bg: 'primary.400'
                }}
                onClick={() => handlePageClick(item)}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button
          bg='transparent'
          w="fit-content"
          _hover={{
            bg: 'transparent'
          }}
          cursor={isDisableNext ? 'not-allowed' : ''}
          disabled={isDisableNext}
          onClick={handleNextPage}>
          <Next />
        </Button>
      </Flex>
    </Flex>
  )
}

const Pagination = memo(PaginationComponent);
export default Pagination;
