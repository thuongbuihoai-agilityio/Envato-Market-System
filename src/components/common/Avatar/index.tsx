import { memo } from 'react';
import {
  Avatar as AvatarChakra,
  AvatarProps as AvatarPropsChakra,
} from '@chakra-ui/react';

interface AvatarProps extends AvatarPropsChakra {
  src?: string;
}

const AvatarComponent = ({ src = '', ...props }: AvatarProps) => (
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

const Avatar = memo(AvatarComponent);

export default Avatar;
