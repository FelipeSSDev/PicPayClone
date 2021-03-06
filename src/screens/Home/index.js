import React from 'react';
import {Platform} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

import {Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance} from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

const Home = () => {
  return (
    <Wrapper OperatingSystem={Platform.OS}>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$22,90</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
      </Container>
    </Wrapper>
  );
};

export default Home;
