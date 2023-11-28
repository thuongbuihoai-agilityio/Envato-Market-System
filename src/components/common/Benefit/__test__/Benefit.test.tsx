import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// component
import { Benefit } from '@components/index';
import { IMAGES } from '@constants/images';

test('renders Benefit with content', () => {
  const { container } = render(
    <Benefit imageURL={IMAGES.SIGN_IN.url} alt={IMAGES.SIGN_IN.alt} />,
  );
  expect(container).toMatchSnapshot();
});
