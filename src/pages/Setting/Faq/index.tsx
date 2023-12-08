import { memo } from 'react';
import { Box } from '@chakra-ui/react';

// Constants
import { FAQ_DATA } from '@mocks/faq';

// Components
import { FaqItem } from '@components/index';

const FaqPageComponent = () => (
  <Box>
    {FAQ_DATA.map(({ id, question, answer }) => (
      <FaqItem key={id} question={question} answer={answer} />
    ))}
  </Box>
);

const FaqPage = memo(FaqPageComponent);

export default FaqPage;
