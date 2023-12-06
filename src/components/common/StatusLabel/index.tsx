import { memo } from 'react';

// Components
import { Tag } from '@chakra-ui/react';

// Interfaces
import { Status } from '@interfaces/status';

interface StatusLabelProps {
  value?: string;
};

const StatusLabelComponent = ({ value = '' }: StatusLabelProps) => {
  const getStatusVariant = (value: string) => {
    switch (value) {
      case Status.FULL_TIME:
        return 'primary';
      case Status.PART_TIME:
        return 'secondary';
      case Status.SENIOR_LEVEL:
        return 'tertiary';
      case Status.JUNIOR_LEVEL:
        return 'quaternary';
      default:
        return '';
    }
  };

  return (
    <Tag data-testId='tag' px={3} py={1} variant={getStatusVariant(value)} fontSize='sm' borderRadius='lg'>
      {value}
    </Tag>
  )
}

const StatusLabel = memo(StatusLabelComponent);
export default StatusLabel;
