import { css } from 'styled-components'

export const testingLayout = (css`
  html, body, #root { border: 3px solid darkslategray; }
	/* #root *, .s *, .ss { box-shadow: inset 0 0 5px silver; } */
	#root *, .t *, .tt { transition: 0.3s linear; }
`)