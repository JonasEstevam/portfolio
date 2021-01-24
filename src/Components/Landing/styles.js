import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 635px) {
    flex-direction: row-reverse;
  }

  @keyframes focus-in-expand {
    0% {
      letter-spacing: -0.5em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .hello-texts {
    display: flex;
    flex-direction: column;
    > strong {
      text-align: center;
      animation-name: focus-in-expand;
      animation-duration: .5s;
      font-size: 1rem;
      letter-spacing: 2px;
    }
    > p {
      font-weight: 100;
      animation-name: fadeIn;
      animation-duration: 0.5s;
      font-size: 1rem;
      letter-spacing: 2px;
      text-align: center;
      margin: 0 20px 0 20px;
    }
  }
`;

export const Jonas = styled.img`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: fadeIn;
  animation-duration: .5s;
  margin-top: 100px;
  width: 150px;
  height: 223px;

  @media (min-width: 635px) {
    width: 400px;
    height: 597px;
  }
`;
