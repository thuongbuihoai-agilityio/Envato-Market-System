import { memo } from 'react';

// Constants
import { FAQ_DATA } from '@app/constants';

// Components
import { FaqItem } from '@app/components';

const FaqPageComponent = () =>
  FAQ_DATA.map(({ id, question, answer }) => (
    <FaqItem key={id} question={question} answer={answer} />
  ));

const FaqPage = memo(FaqPageComponent);

export default FaqPage;
