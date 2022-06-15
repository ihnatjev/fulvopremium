import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContainerRoot = styled.div`
  max-width: 1280px;
  position: relative;

  margin-left: auto;
  margin-right: auto;
`;

type ContainerProps = {
  children?: ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <ContainerRoot>{children}</ContainerRoot>
);

export default Container;
