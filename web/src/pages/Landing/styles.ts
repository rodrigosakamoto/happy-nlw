import styled from 'styled-components';
import landing from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    width: 222px;
    height: 56px;
    border-radius: 20px;
    text-decoration: none;
    background: #12d4e0;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 800;

    &:hover {
      background: #96feff;
      color: #15c3d6;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  > a {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: #96feff;
    }
  }
`;

export const Location = styled.div`
  margin-left: 64px;
  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
    text-align: right;
  }
`;
