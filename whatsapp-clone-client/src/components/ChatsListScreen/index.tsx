import React, { FC } from 'react';
import styled from 'styled-components';

import ChatsNavbar from './ChatsNavbar';
import ChatsList from './ChatsList';

const Container = styled.div`
  height: 100vh;
`;

const ChatsListScreen: React.FC = () => (
  <Container>
    <ChatsNavbar />
    <ChatsList />
  </Container>
);
export default ChatsListScreen;
