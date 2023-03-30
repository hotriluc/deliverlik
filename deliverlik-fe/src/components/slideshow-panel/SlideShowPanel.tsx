import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 5rem;
  padding: 2rem;
  min-height: 30rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

const PanelRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const PanelItem = styled.div`
  /* min-width: 30rem; */
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadows.primaryBackground};

  min-height: 13rem;
  max-height: 13rem;
`;

const SlideShowPanel = () => {
  return (
    <Panel>
      <PanelRow>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
      </PanelRow>
      <PanelRow>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
        <PanelItem style={{ width: "20rem" }}>Item1</PanelItem>
      </PanelRow>
    </Panel>
  );
};

export default SlideShowPanel;
