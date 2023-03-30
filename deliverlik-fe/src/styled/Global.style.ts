import styled, { css } from "styled-components";

interface FlexProps {
  gap?: string;
  column?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: ${(props) => props.gap || "2rem"};
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.justifyEnd &&
    css`
      justify-content: flex-end;
    `}
    
    ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
    ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
    @media (max-width: 420px) {
    justify-content: flex-start;
  }
`;
