import { Global, css } from "@emotion/core";
const global = css`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  html * {
    font-family: ProximaNova, Roboto, Helvetica, Arial, sans-serif;
  }
`;

export const GlobalStyles = () => <Global styles={global}></Global>;
