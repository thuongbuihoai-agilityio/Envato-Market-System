import { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  TableContainer,
  Table as TableChakra,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableProps,
  Text,
  Tooltip,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES } from '@app/constants';

// Types
import { TDataSource, THeaderTable } from '@app/interfaces';
type TTableProps = TableProps & {
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  onClickTableRow?: (id: string) => void;
};

const Table = ({
  columns = [],
  dataSource = [],
  onClickTableRow,
  ...props
}: TTableProps): JSX.Element => (
  <TableContainer>
    <TableChakra {...props}>
      <Thead>
        <Tr>
          {!!columns.length &&
            columns.map(({ key, title, renderHead }) =>
              renderHead ? (
                renderHead(`${title}`, `${key}`)
              ) : (
                <Th key={key} py={5} px={0} textAlign="left">
                  <Text
                    color="text.secondary"
                    textTransform="none"
                    fontSize="sm"
                    title={title}
                  >
                    {title}
                  </Text>
                </Th>
              ),
            )}
        </Tr>
      </Thead>

      <Tbody>
        {!dataSource.length ? (
          <Tr>
            <Td
              colSpan={columns?.length}
              py={6}
              color="text.primary"
              fontSize="xl"
              fontWeight="semibold"
              textAlign="center"
              border="none"
            >
              {ERROR_MESSAGES.EMPTY_DATA}
            </Td>
          </Tr>
        ) : (
          dataSource.map((data) => {
            const handleClick = () =>
              !!onClickTableRow && onClickTableRow(`${data.id}`);

            return (
              <Tr
                key={data.id}
                {...(onClickTableRow && {
                  cursor: 'pointer',
                })}
                onClick={handleClick}
              >
                {!!columns.length &&
                  columns.map((column) =>
                    column.renderBody ? (
                      column.renderBody(data)
                    ) : (
                      <Td key={column.key} py={5} px={0} minW={280}>
                        <Tooltip
                          minW="max-content"
                          placement="bottom-start"
                          label={data[column.key as keyof typeof data]}
                        >
                          <Text
                            fontSize="md"
                            color="text.primary"
                            fontWeight="semibold"
                            textAlign="left"
                            whiteSpace="break-spaces"
                            maxW={200}
                            noOfLines={1}
                          >
                            {data[column.key as keyof typeof data]}
                          </Text>
                        </Tooltip>
                      </Td>
                    ),
                  )}
              </Tr>
            );
          })
        )}
      </Tbody>
    </TableChakra>
  </TableContainer>
);

const TableMemorized = memo(Table, isEqual);

export default TableMemorized;
