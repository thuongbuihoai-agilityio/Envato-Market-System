import { memo } from 'react';
import { Box, IconButton } from '@chakra-ui/react';

interface IconButtonProps {
  children: JSX.Element;
  isEmail?: boolean;
  onClick?: () => void;
}

const IconButtonComponent = ({
  children,
  isEmail = false,
  onClick,
}: IconButtonProps) => {
  return (
    <Box data-testid="icon-button-component" pos="relative" maxW="fit-content">
      <Box
        pos="absolute"
        bg={isEmail ? 'danger.500' : 'secondary.450'}
        rounded="50%"
        w="15px"
        h="15px"
        textAlign="center"
        top="0px"
        right="-5px"
        fontSize="xs"
        zIndex={1}
        _light={{ border: 'solid 3px white' }}
      />
      <IconButton
        data-testid="icon-button"
        pos="relative"
        variant="iconPrimary"
        w="52px"
        h="52px"
        aria-label="Send email"
        icon={children}
        onClick={onClick}
      />
    </Box>
  );
};

const CustomIconButton = memo(IconButtonComponent);
export default CustomIconButton;
