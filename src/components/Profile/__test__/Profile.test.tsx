import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Components
import { UpdateProfile } from '@app/components';

const setValueMock = jest.fn();

const setup = () => render(<UpdateProfile url="" setValue={setValueMock} />);

const uploadImageMock = jest.fn();

jest.mock('@app/services/image', () => ({
  ...jest.requireActual('@app/services/image'),
  uploadImage: () => uploadImageMock,
}));

describe('UpdateProfile component', () => {
  beforeEach(() => {
    uploadImageMock.mockReturnValue('mock-url');
  });

  it('Profile component renders correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should call setValue when a file is uploaded', async () => {
    const { getByTestId } = setup();
    const fileInput = getByTestId('upload-image');
    const file = new File(['mockImage'], 'image.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);

    expect(setValueMock).toHaveBeenCalled();
  });
});
