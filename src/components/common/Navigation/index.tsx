import { ReactNode, memo } from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export type TNavigationProps = {
  children: ReactNode;
  destination?: string;
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
            fill: 'primary.500',
          },
          '&.path-2': {
            fill: 'primary.900',
          },
        },
        circle: {
          '&.path-1': {
            fill: 'primary.500',
          },
        },
        ellipse: {
          '&.path-1': {
            fill: 'primary.500',
          },
        },
      },
    }}
    _dark={{
      svg: {
        path: {
          '&.path-1': {
            fill: 'white',
          },
          '&.path-2': {
            fill: 'primary.600',
          },
        },
        circle: {
          '&.path-1': {
            fill: 'white',
          },
        },
        ellipse: {
          '&.path-1': {
            fill: 'white',
          },
        },
      },
      _hover: {
        svg: {
          path: {
            '&.path-1': {
              fill: 'primary.950',
            },
            '&.path-2': {
              fill: 'primary.600',
            },
          },
          circle: {
            '&.path-1': {
              fill: 'primary.950',
            },
          },
          ellipse: {
            '&.path-1': {
              fill: 'primary.950',
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

const NavigationCompnent = memo(Navigation);

export default NavigationCompnent;
