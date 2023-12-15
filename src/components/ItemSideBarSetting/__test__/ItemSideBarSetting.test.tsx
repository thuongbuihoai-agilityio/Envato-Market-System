import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { ItemSideBarSetting } from '@app/components';

// Assets
import { Account } from '@app/assets/icons';

describe('Fetching component', () => {
  const onToggle = jest.fn();
  it('should renders correctly', () => {
    const { container } = render(
      <ItemSideBarSetting id="1" onClick={onToggle} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should renders component', () => {
    render(
      <ItemSideBarSetting
        id="1"
        title="Heading"
        content="This is my item"
        activeItemId="1"
        onClick={onToggle}
      />,
    );

    expect(screen.getByText('Heading')).toBeInTheDocument();
  });

  it('should renders component with children', () => {
    render(
      <ItemSideBarSetting id="1" title="Heading" onClick={onToggle}>
        <Account color="#fff" />
      </ItemSideBarSetting>,
    );

    expect(screen.getByText('Heading')).toBeInTheDocument();
  });

  it('should renders data when onClick', () => {
    render(<ItemSideBarSetting id="1" title="Heading" onClick={onToggle} />);

    fireEvent.click(screen.getByText('Heading'));
    expect(onToggle).toHaveBeenCalled();
  });
});
