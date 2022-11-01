import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  & h1 {
    font-size: 50px;
    font-weight: 700;
    padding: 1em 0;
    text-align: center;
  }

  & button {
    padding: 0.8rem 1rem;
    border: 0;
    background-color: #b13138;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
