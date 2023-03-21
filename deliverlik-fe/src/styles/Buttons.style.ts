import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 2rem 4rem;
  font-size: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
`;
