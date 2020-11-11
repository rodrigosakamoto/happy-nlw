import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import {
  Container,
  ContentWrapper,
  Header,
  HeaderContainer,
  Content,
  Location,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <HeaderContainer>
            <img src={logoImg} alt="happy" />
            <Location>
              <strong>Mogi das Cruzes</strong>
              <span>São Paulo</span>
            </Location>
          </HeaderContainer>
          <Link to="/login">Acesso restrito</Link>
        </Header>

        <Content>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          <Link to="/app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
