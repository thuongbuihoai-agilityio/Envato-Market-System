import { memo } from 'react';

// Components
import { Tag } from '@chakra-ui/react';

// Interfaces
import { Status } from '@interfaces/status';

// Constants
import { STATUS_LABEL } from '@constants/status';

interface StatusLabelProps {
  value?: Status;
}

const StatusLabelComponent = ({
  value = Status.FULL_TIME,
}: StatusLabelProps) => (
  <Tag
    data-testId="tag"
    px={3}
    py={1}
    variant={STATUS_LABEL[value]}
    fontSize="sm"
    borderRadius="lg"
  >
    {value}
  </Tag>
);

const StatusLabel = memo(StatusLabelComponent);
export default StatusLabel;
