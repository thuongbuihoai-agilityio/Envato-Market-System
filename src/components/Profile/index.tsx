import { useCallback, useState } from 'react';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';
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

// Interfaces
import { TUser } from '@app/interfaces';

// Constants
import { IMAGES } from '@app/constants/images';

// Services
import { uploadImage } from '@app/services/image.service';

export type TUpdateProfileProps = {
  setValue: UseFormSetValue<TUser>;
  getValues: UseFormGetValues<TUser>;
};
const UpdateProfile = ({ setValue, getValues }: TUpdateProfileProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];

      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        const result = await uploadImage(formData);

        setSelectedFile(file);

        setValue('avatarURL', result);
      }
    },
    [setValue, setSelectedFile],
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
        <Image
          borderRadius="50%"
          w="huge"
          h="huge"
          src={
            selectedFile
              ? URL.createObjectURL(selectedFile)
              : getValues('avatarURL')
          }
          alt={IMAGES.BIG_AVATAR.alt}
          objectFit="cover"
        />

        <InputGroup boxSize={7}>
          <InputLeftElement>
            <FormLabel htmlFor="file">
              <Image
                src={IMAGES.EDIT.url}
                alt={IMAGES.EDIT.alt}
                objectFit="cover"
                maxW={'none'}
                position="absolute"
                bottom="-31px"
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
              width="100%"
              height="100%"
              id="file"
              name="file"
            />
          </InputLeftElement>
        </InputGroup>
      </Center>
    </Box>
  );
};

export default UpdateProfile;
