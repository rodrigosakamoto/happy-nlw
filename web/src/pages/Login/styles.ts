import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background: #fff;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  position: relative;

  fieldset {
    border: 0;
    display: flex;
    flex: 1;
    flex-direction: column;

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: bold;

      margin-bottom: 40px;
    }

    button {
      cursor: pointer;
      margin-top: 40px;
      height: 64px;
      border-radius: 20px;
      background: #37c77f;
      border: 0;

      color: #fff;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        background: #3ee08f;
      }
    }

    a {
      font-size: 16px;
      font-weight: 600;
      color: #8fa7b3;
      text-align: center;
      margin-top: 24px;
      text-decoration: none;
    }
  }
`;

export const GoBack = styled.button`
  position: absolute;
  top: 5%;
  right: 10%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  background: #ebf2f5;
  border-radius: 16px;
  border: 0;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
