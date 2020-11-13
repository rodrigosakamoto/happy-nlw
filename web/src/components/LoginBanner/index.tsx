import React from 'react';

import LogoBanner from '../../images/logo-login.svg';

import { Container, Location } from './styles';

const LoginBanner: React.FC = () => {
  return (
    <Container>
      <img src={LogoBanner} alt="Happy" />
      <Location>
        <strong>Mogi das Cruzes</strong>
        <span>São Paulo</span>
      </Location>
    </Container>
  );
};

export default LoginBanner;
