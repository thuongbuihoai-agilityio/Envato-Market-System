import { render } from '@testing-library/react';

// Components
import { Modal } from '@app/components';

describe('Modal test cases', () => {
  const mockOnClose = jest.fn();

  const mockRenderBody = jest.fn();

  const setup = () =>
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        renderBody={mockRenderBody}
        title="mock title"
      />,
    );

  it('should render correctly', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render with default value', () => {
    const { container } = render(<Modal isOpen={true} onClose={mockOnClose} />);

    expect(container).toMatchSnapshot();
  });
});
