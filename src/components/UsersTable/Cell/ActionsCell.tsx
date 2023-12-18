import { Button, Flex, IconButton, Td } from '@chakra-ui/react';
import { MouseEventHandler, memo, useCallback } from 'react';

// Icons
import { Dot } from '@app/assets/icons';
import areEqual from 'react-fast-compare';

type TActionsProps = {
  onClickMessage?: () => void;
  onSelect?: () => void;
};

const ActionComponent = ({
  onClickMessage,
  onSelect,
}: TActionsProps): JSX.Element => {
  const handleClickMessage: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => onClickMessage && onClickMessage(),
    [onClickMessage],
  );

  const handleSelect: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => onSelect && onSelect(),
    [onSelect],
  );

  return (
    <Td
      py={5}
      px={4}
      fontSize="md"
      color="text.primary"
      fontWeight="semibold"
      textAlign="left"
    >
      <Flex alignItems="center" gap={3}>
        <Button
          aria-label="btn-message"
          onClick={handleClickMessage}
          flex={1}
          size="none"
        >
          Message
        </Button>
        <IconButton
          aria-label={'This is the icon action'}
          w={7}
          h={7}
          bgColor="transparent"
          _hover={{
            bgColor: 'transparent',
          }}
          onClick={handleSelect}
        >
          <Dot />
        </IconButton>
      </Flex>
    </Td>
  );
};

const ActionsCell = memo(ActionComponent, areEqual);

export default ActionsCell;
