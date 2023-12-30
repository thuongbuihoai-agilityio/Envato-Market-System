import { memo } from 'react';

import { Box, Text } from '@chakra-ui/react';

// Constants
import { TERM_CONDITION } from '@app/constants/termCondition';

// Components
import TermAndConditionItem from '@app/components/TermConditionItem';

const TermAndConditionPage = () => (
  <Box>
    <Text as="h3" fontWeight="bold" fontSize="2xl" mb={3}>
      Term and Conditions
    </Text>

    {TERM_CONDITION.map(({ id, heading, content, description, note }) => (
      <TermAndConditionItem
        key={id}
        heading={heading}
        content={content}
        description={description}
        note={note}
      />
    ))}
  </Box>
);

const TermCondition = memo(TermAndConditionPage);
export default TermCondition;
