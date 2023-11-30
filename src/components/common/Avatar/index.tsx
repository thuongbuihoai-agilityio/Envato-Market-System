import {
  Avatar as AvatarChakra,
  AvatarProps as AvatarPropsChakra,
} from '@chakra-ui/react';

interface AvatarProps extends AvatarPropsChakra {
  src?: string;
}

const Avatar = ({ src = '', ...props }: AvatarProps) => (
  <AvatarChakra borderRadius={12} cursor="pointer" src={src} {...props} />
);

export default Avatar;
