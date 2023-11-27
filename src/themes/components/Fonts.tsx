import { Global } from '@emotion/react';

import urbanistMedium from '@assets/fonts/Urbanist-Medium.ttf';
import urbanistSemiBold from '@assets/fonts/Urbanist-SemiBold.ttf';
import urbanistBold from '@assets/fonts/Urbanist-Bold.ttf';
import poppinsSemiBold from '@assets/fonts/Poppins-SemiBold.ttf';
import poppinsBold from '@assets/fonts/Poppins-SemiBold.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Urbanist';
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        src: url('${urbanistMedium}') format('woff2');
      }
      
      @font-face {
        font-family: 'Urbanist';
        font-weight: 600;
        font-display: swap;
        font-style: normal;
        src: url('${urbanistSemiBold}') format('woff2');
      }

      @font-face {
        font-family: 'Urbanist';
        font-display: swap;
        font-weight: 700;
        font-style: normal;
        src: url('${urbanistBold}') format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-display: swap;
        font-style: normal;
        font-weight: 600;
        src: url('${poppinsSemiBold}') format('woff2');
      }

      @font-face {
        font-family: 'Poppins';
        font-display: swap;
        font-weight: 700;
        font-style: normal;
        src: url('${poppinsBold}') format('woff2');
      }
    `}
  />
);

export default Fonts;
