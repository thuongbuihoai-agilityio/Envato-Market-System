import {
  Avatar as AvatarChakra,
  AvatarProps as AvatarPropsChakra,
} from '@chakra-ui/react';
import Lazy from '@components/Lazy';

interface AvatarProps extends AvatarPropsChakra {
  src?: string;
}

const Avatar = ({ src = '', ...props }: AvatarProps) => (
  <AvatarChakra
    borderRadius={12}
    borderWidth="1px"
    borderColor="gray.200"
    w="52px"
    h="52px"
    cursor="pointer"
    src={src}
    {...props}
  />
);

export default (
  <Lazy>
    <Avatar />
  </Lazy>
);
