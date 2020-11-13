import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const Location = styled.div`
  font-size: 24px;
  line-height: 34px;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-weight: 800;
  }
`;
