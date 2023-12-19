import { useCallback, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
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
  Skeleton,
} from '@chakra-ui/react';

// Interfaces
import { TUserDetail } from '@app/interfaces';

// Constants
import { IMAGES } from '@app/constants/images';

// Services
import { uploadImage } from '@app/services/image';

export type TUpdateProfileProps = {
  url: string;
  setValue: UseFormSetValue<TUserDetail>;
};
const UpdateProfile = ({ url, setValue }: TUpdateProfileProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);

      const file = (e.target.files && e.target.files[0]) as File;

      const formData = new FormData();
      formData.append('image', file);

      const result = await uploadImage(formData);

      setValue('avatarURL', result);

      setIsLoading(false);
    },
    [setValue],
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

      <Center position="relative">
        <Skeleton isLoaded={!isLoading} borderRadius="50%" w="huge" h="huge">
          <Image
            borderRadius="50%"
            w="huge"
            h="huge"
            src={url || IMAGES.AVATAR_SIGN_UP.url}
            alt={IMAGES.AVATAR_SIGN_UP.alt}
            fallbackSrc={IMAGES.USER.url}
            objectFit="cover"
          />
        </Skeleton>

        <InputGroup boxSize={7}>
          <InputLeftElement>
            <FormLabel htmlFor="file">
              <Image
                src={IMAGES.EDIT.url}
                alt={IMAGES.EDIT.alt}
                objectFit="cover"
                maxW={'none'}
                position="absolute"
                bottom={-31}
                left="-48px"
                zIndex={1}
                border="none"
                bg="none"
                w="auto"
              />
            </FormLabel>

            <Input
              borderRadius="50%"
              type="file"
              onChange={handleFileChange}
              opacity={0}
              position="relative"
              width="full"
              height="full"
              id="file"
              name="file"
              data-testid="upload-image"
            />
          </InputLeftElement>
        </InputGroup>
      </Center>
    </Box>
  );
};

export default UpdateProfile;
