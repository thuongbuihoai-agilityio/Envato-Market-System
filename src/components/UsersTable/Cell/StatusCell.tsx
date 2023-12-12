import { Badge, BadgeProps, Td } from '@chakra-ui/react';
import { memo } from 'react';

type TStatusProps = BadgeProps & {
  text?: string | number | boolean;
};

const StatusComponent = ({
  text = '',
  ...props
}: TStatusProps): JSX.Element => (
  <Td
    py={5}
    px={0}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="left"
    minW={120}
  >
    <Badge {...props}>{text}</Badge>
  </Td>
);

const StatusCell = memo(StatusComponent);

export default StatusCell;
