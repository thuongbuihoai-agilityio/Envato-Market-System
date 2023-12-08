import { Box } from '@chakra-ui/react';

// Constants
import { FAQ_DATA } from '@mocks/faq';

// Components
import FaqItem from '@components/FaqItem';
import { memo } from 'react';

const FaqPageComponent = () => (
  <Box>
    {FAQ_DATA.map((item) => (
      <FaqItem key={item.id} question={item.question} answer={item.answer} />
    ))}
  </Box>
);

const FaqPage = memo(FaqPageComponent);

export default FaqPage;
