import { memo } from 'react';
import areEqual from 'react-fast-compare';
import {
  TableContainer,
  Table as TableChakra,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES } from '@constants/messages';

type TDataSource = {
  [key: string]: string | number | boolean;
};

type THeaderTable = {
  title?: string;
  key?: string;
  renderBody?: (_: TDataSource) => JSX.Element;
  renderHead?: (_: string) => JSX.Element;
};

type TTableProps = {
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
};

const TableComponent = ({
  columns,
  dataSource = [],
}: TTableProps): JSX.Element => (
  <TableContainer>
    <TableChakra variant="simple">
      <Thead>
        <Tr>
          {columns &&
            columns.map(({ key, title, renderHead }) =>
              renderHead ? (
                renderHead(`${title}`)
              ) : (
                <Th
                  key={key}
                  color="text.secondary"
                  textTransform="none"
                  fontSize="sm"
                  py={5}
                >
                  {title}
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
          dataSource.map((data) => (
            <Tr key={`${data.id}`}>
              {columns &&
                columns.map((column) => (
                  <Td
                    key={column.key}
                    py={5}
                    fontSize="md"
                    color="text.primary"
                    fontWeight="semibold"
                  >
                    {column.renderBody
                      ? column.renderBody(data)
                      : data[column.key as keyof typeof data]}
                  </Td>
                ))}
            </Tr>
          ))
        )}
      </Tbody>
    </TableChakra>
  </TableContainer>
);

const Table = memo(TableComponent, areEqual);

export default Table;
