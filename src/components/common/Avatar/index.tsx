import { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Avatar as AvatarChakra,
  AvatarProps as AvatarPropsChakra,
} from '@chakra-ui/react';

interface AvatarProps extends AvatarPropsChakra {
  src?: string;
}

const AvatarComponent = ({ src = '', ...props }: AvatarProps) => (
  <AvatarChakra
    borderRadius="xl"
    borderWidth="1px"
    borderColor="gray.200"
    w="52px"
    h="52px"
    cursor="pointer"
    src={src}
    {...props}
  />
);

const Avatar = memo(AvatarComponent, isEqual);

export default Avatar;
