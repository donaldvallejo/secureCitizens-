import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

import { browserAccessory } from './other';

// ${ testingLayout }
const CustomStyles = createGlobalStyle`
  ${browserAccessory}

  html, body {
    ${tw`
    antialiased
    font-display
    `}
    scroll-behavior: smooth;
  }
`;

export const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);
