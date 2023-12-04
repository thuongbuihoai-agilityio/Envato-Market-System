import { fireEvent, render } from '@testing-library/react';

// Components
import Select from '..';

// Mocks
import { OPTIONS } from '@mocks/index';

describe('Select', () => {
  it('Match snapshot', () => {
    const { container } = render(<Select options={OPTIONS} />);

    expect(container).toMatchSnapshot();
  });

  it('Open list item', () => {
    const { getByRole, container } = render(<Select options={OPTIONS} />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(container.querySelectorAll('button').length).toBe(
      OPTIONS.length + 1,
    );
  });

  it('Select one item', () => {
    const { getByRole, container } = render(<Select options={OPTIONS} />);
    const button = getByRole('button');

    fireEvent.click(button);

    const buttons = container.querySelectorAll('button');

    expect(buttons.length).toBe(OPTIONS.length + 1);
    fireEvent.click(buttons[2]);
    expect(getByRole('button').textContent).toBe(OPTIONS[1].label);
  });
});
