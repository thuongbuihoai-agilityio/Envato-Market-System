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
  TableProps,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES } from '@constants/index';

export type TDataSource = {
  id: string | number;
  [key: string]: string | number | boolean;
};

type THeaderTable = {
  title?: string;
  key?: string;
  renderBody?: (_: TDataSource) => JSX.Element;
  renderHead?: (_: string) => JSX.Element;
};

type TTableProps = TableProps & {
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  onClickTableRow?: (id: string) => void;
};

const TableComponent = ({
  columns,
  dataSource = [],
  onClickTableRow,
  ...props
}: TTableProps): JSX.Element => (
  <TableContainer>
    <TableChakra {...props}>
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
                  px={0}
                  textAlign="left"
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
          dataSource.map((data) => {
            const handleClick = () =>
              onClickTableRow && onClickTableRow(`${data.id}`);
            return (
              <Tr
                key={data.id}
                {...(onClickTableRow && {
                  cursor: 'pointer',
                })}
                onClick={handleClick}
              >
                {columns &&
                  columns.map((column) =>
                    column.renderBody ? (
                      column.renderBody(data)
                    ) : (
                      <Td
                        key={column.key}
                        py={5}
                        px={0}
                        fontSize="md"
                        color="text.primary"
                        fontWeight="semibold"
                        textAlign="left"
                      >
                        {data[column.key as keyof typeof data]}
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

const Table = memo(TableComponent, areEqual);

export default Table;
