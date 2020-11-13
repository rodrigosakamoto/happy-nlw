import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import LoginBanner from '../../components/LoginBanner';
import InputBlock from '../../components/InputBlock';

import { Container, LoginForm, GoBack } from './styles';

const Login: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <LoginBanner />
      <LoginForm>
        <fieldset>
          <legend>Fazer login</legend>
          <InputBlock>
            <label>E-mail</label>
            <input />
          </InputBlock>

          <InputBlock>
            <label>Senha</label>
            <input />
          </InputBlock>

          <button type="button">Entrar</button>
          <Link to="/">Esqueci minha senha</Link>
        </fieldset>
        <GoBack type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </GoBack>
      </LoginForm>
    </Container>
  );
};

export default Login;
