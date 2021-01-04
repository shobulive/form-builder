import styled from "@emotion/styled";

export const Container = styled("div")`
  max-width: 400px;
`;

export const MainContainer = styled("div")`
  padding: 16px;
  min-width: 400px;
`;

export const Select = styled("select")`
  width: 100%;
  height: 40px;
`;

export const H3 = styled("h3")`
  color: #000;
  display: flex;
  flex-direction: column;
  ${(props) => (props.error ? "margin-bottom: 0;" : "")}
`;

export const P = styled("p")`
  color: #f00;
  margin: 8px 0;
`;

export const OptionContainer = styled("div")`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 8px;
  grid-gap: 8px;
`;

export const Button = styled("button")`
  width: 102%;
  margin-top: 16px;
  background-color: #4287f5;
  color: #fff;
  cursor: pointer;
  border: none;
  font-weight: bold;
  height: 40px;
`;

export const Holder = ({ questionText, children, error }) => (
  <Container>
    <H3 error={error}>{questionText}</H3>
    {error && <P>{error}</P>}
    {children}
  </Container>
);
