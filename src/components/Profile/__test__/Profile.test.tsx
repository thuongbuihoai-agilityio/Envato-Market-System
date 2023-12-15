import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpdateProfile from '..';
import userEvent from '@testing-library/user-event';
// import { uploadImage } from '@app/services/image.service';

const setValueMock = jest.fn();

const setup = () => render(<UpdateProfile url="" setValue={setValueMock} />);

const uploadImageMock = jest.fn();

jest.mock('@app/services/image.service', () => ({
  ...jest.requireActual('@app/services/image.service'),
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
