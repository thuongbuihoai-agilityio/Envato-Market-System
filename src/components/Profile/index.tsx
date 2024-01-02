import { ChangeEvent, useCallback, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  Box,
  Heading,
  Text,
  Image,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
} from '@chakra-ui/react';

// Constants
import { AUTH_SCHEMA, ERROR_MESSAGES, IMAGES, REGEX } from '@app/constants';

// Services
import { uploadImage } from '@app/services/image';
import { TUserDetail } from '@app/interfaces';

// Constants
import { MAX_SIZE } from '@app/constants/sizes';

export type TUpdateProfileProps = {
  control: Control<TUserDetail>;
  onUploadError: (message: string) => void;
};

const UpdateProfile = ({ control, onUploadError }: TUpdateProfileProps) => {
  const [previewURL, setPreviewURL] = useState<string>('');

  const handleChangeFile = useCallback(
    (callback: (value: string) => void) =>
      async (e: ChangeEvent<HTMLInputElement>) => {
        const file = (e.target.files && e.target.files[0]) as File;

        // Check file is empty or undefined
        if (!file) {
          return;
        }

        // Check type of image
        if (!REGEX.IMG.test(file.name)) {
          return onUploadError(ERROR_MESSAGES.UPLOAD_IMAGE);
        }

        // Check size of image
        if (file.size > MAX_SIZE) {
          return onUploadError(ERROR_MESSAGES.UPLOAD_IMAGE_SIZE);
        }

        // Uploading file
        try {
          callback('');
          const previewImage: string = URL.createObjectURL(file);
          const formData = new FormData();

          formData.append('image', file);
          setPreviewURL(previewImage);

          const result = await uploadImage(formData);
          callback(result);
        } catch (error) {
          onUploadError(ERROR_MESSAGES.UPDATE_FAIL.title);
        }
      },
    [onUploadError],
  );

  return (
    <Box>
      <Heading
        as="h4"
        textTransform="capitalize"
        color="text.quinary"
        fontWeight="bold"
        fontSize="lg"
        mb={2}
      >
        update profile
      </Heading>

      <Text color="secondary.250" mb={4}>
        Profile at least Size
        <Text as="span" color="text.septenary">
          300x300.
        </Text>
        Gift to work too.
      </Text>

      <Controller
        control={control}
        name="avatarURL"
        rules={AUTH_SCHEMA.AVATAR_URL}
        render={({ field: { value, onChange } }) => (
          <Center position="relative">
            <FormLabel
              htmlFor="file"
              cursor="pointer"
              _hover={{ transform: 'scale(1.1)' }}
            >
              <Image
                borderRadius="50%"
                w="huge"
                h="huge"
                src={previewURL || value || IMAGES.AVATAR_SIGN_UP.url}
                alt={IMAGES.AVATAR_SIGN_UP.alt}
                fallbackSrc={IMAGES.USER.url}
                fallbackStrategy="onError"
                objectFit="cover"
              />
            </FormLabel>

            <InputGroup boxSize={7}>
              <InputLeftElement>
                <FormLabel htmlFor="file">
                  <Image
                    src={IMAGES.EDIT.url}
                    alt={IMAGES.EDIT.alt}
                    fallbackSrc={IMAGES.FALLBACK.url}
                    fallbackStrategy="onError"
                    objectFit="cover"
                    boxSize={29}
                    position="absolute"
                    bottom={-31}
                    left="-48px"
                    zIndex={1}
                    border="none"
                    bg="none"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.1)' }}
                  />
                </FormLabel>
                <Input
                  value=""
                  borderRadius="50%"
                  type="file"
                  opacity={0}
                  position="relative"
                  width="full"
                  height="full"
                  id="file"
                  data-testid="upload-image"
                  onChange={handleChangeFile(onChange)}
                  accept="image/*"
                  data-testId="upload-image"
                />
              </InputLeftElement>
            </InputGroup>
          </Center>
        )}
      />
    </Box>
  );
};

export default UpdateProfile;
