import { ReactNode, memo } from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export type TNavigationProps = {
  children: ReactNode;
  destination?: string;
};

const COLOR = {
  LIGHT: {
    PRIMARY: 'primary.500',
    SECONDARY: 'primary.900',
  },
  DARK: {
    PRIMARY: 'white',
    SECONDARY: 'primary.800',
    ALTERNATIVE: 'primary.600',
  },
};
const Navigation = ({ children, destination = '/' }: TNavigationProps) => (
  <Link
    as={ReactRouterLink}
    to={destination}
    _hover={{
      textDecoration: 'none',
      svg: {
        path: {
          '&.path-1': {
            fill: COLOR.LIGHT.PRIMARY,
          },
          '&.path-2': {
            fill: COLOR.LIGHT.SECONDARY,
          },
        },
        circle: {
          '&.path-1': {
            fill: COLOR.LIGHT.PRIMARY,
          },
        },
        ellipse: {
          '&.path-1': {
            fill: COLOR.LIGHT.PRIMARY,
          },
        },
      },
      '& p': {
        color: COLOR.LIGHT.PRIMARY,
      },
    }}
    _dark={{
      svg: {
        path: {
          '&.path-1': {
            fill: COLOR.DARK.PRIMARY,
          },
          '&.path-2': {
            fill: COLOR.DARK.ALTERNATIVE,
          },
        },
        circle: {
          '&.path-1': {
            fill: COLOR.DARK.PRIMARY,
          },
        },
        ellipse: {
          '&.path-1': {
            fill: COLOR.DARK.PRIMARY,
          },
        },
      },
      _hover: {
        svg: {
          path: {
            '&.path-1': {
              fill: COLOR.DARK.ALTERNATIVE,
            },
            '&.path-2': {
              fill: COLOR.DARK.ALTERNATIVE,
            },
          },
          circle: {
            '&.path-1': {
              fill: COLOR.DARK.ALTERNATIVE,
            },
          },
          ellipse: {
            '&.path-1': {
              fill: COLOR.DARK.ALTERNATIVE,
            },
          },
        },
      },
    }}
    sx={{
      svg: {
        path: {
          transition: 'all .25s ease-in-out',
        },
        circle: {
          transition: 'all .25s ease-in-out',
        },
        ellipse: {
          transition: 'all .25s ease-in-out',
        },
      },
    }}
  >
    {children}
  </Link>
);

const NavigationComponent = memo(Navigation);

export default NavigationComponent;
