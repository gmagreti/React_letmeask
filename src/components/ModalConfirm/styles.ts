import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #737380;
    margin-bottom: 40px;
  }
`;

export const Icon = styled.div`
  margin-bottom: 28px;
  img {
    width: 48px;
    height: 48px;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 8px;
  button {
    cursor: pointer;
    padding: 13px 30px;
    background: #dbdcdd;
    border-radius: 8px;
    border: 0;
    font-weight: 500;
    font-size: 16px;
    color: #737380;
  }

  button:last-child {
    background: #e73f5d;
    color: #fefefe;
  }
`;
