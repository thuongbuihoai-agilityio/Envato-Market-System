import { Flex, IconButton, Th } from '@chakra-ui/react';
import { memo } from 'react';

// Icons
import { Sort } from '@app/assets/icons';

// Themes
import { colors } from '@app/themes/bases/colors';

type THeadCellProps = {
  title?: string;
  onClick?: () => void;
};

const HeadCellComponent = ({ title, onClick }: THeadCellProps): JSX.Element => (
  <Th
    key={title}
    color="text.secondary"
    textTransform="none"
    fontSize="sm"
    py={5}
    px={0}
    sx={{
      minW: {
        base: 170,
        md: 'unset',
      },
    }}
  >
    <Flex alignItems="center" gap={2}>
      {title}
      <IconButton
        aria-label={`This is the icon for ${title}`}
        w={7}
        h={7}
        bgColor="transparent"
        _hover={{
          bgColor: 'transparent',
        }}
        onClick={onClick}
      >
        <Sort color={colors.secondary[300]} opacityLeft={1} />
      </IconButton>
    </Flex>
  </Th>
);

const HeadCell = memo(HeadCellComponent);

export default HeadCell;
