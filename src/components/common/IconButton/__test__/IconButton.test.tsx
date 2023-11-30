import { Theme } from '@assets/icons';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// component
import { IconButton } from '@components/index';

describe('IconButton test cases', () => {
  const mockOnClick = jest.fn();
  it('should render correctly', () => {
    const { container } = render(
      <IconButton onClick={mockOnClick}>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onClick when being clicked', async () => {
    const { getByTestId } = render(
      <IconButton onClick={mockOnClick}>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    const changeTheme = getByTestId('icon-button');

    await userEvent.click(changeTheme);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('render with hasNewNotification', async () => {
    const { getByTestId } = render(
      <IconButton hasNewNotification onClick={mockOnClick}>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    const iconButton = getByTestId('icon-button-component');
    expect(iconButton).toBeInTheDocument();
  });

  it('render with isNotification with hasNewNotification', async () => {
    const { getByTestId } = render(
      <IconButton isNotification hasNewNotification onClick={mockOnClick}>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    const iconButton = getByTestId('icon-button-component');
    expect(iconButton).toBeInTheDocument();
  });

  it('render with isNotification without hasNewNotification', async () => {
    const { getByTestId } = render(
      <IconButton isNotification onClick={mockOnClick}>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    const iconButton = getByTestId('icon-button-component');
    expect(iconButton).toBeInTheDocument();
  });

  it('render without onClick', async () => {
    const { getByTestId } = render(
      <IconButton>
        <Theme colorFill="gray.800" />
      </IconButton>,
    );
    const iconButton = getByTestId('icon-button-component');
    expect(iconButton).toBeInTheDocument();
  });
});
