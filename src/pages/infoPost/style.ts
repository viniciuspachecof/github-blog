import styled from 'styled-components';

export const InfoPostContainer = styled.div`
  background-color: #0b1b2b;
  padding: 2rem;
  margin-top: calc(0px - 6.625rem);
  border-radius: 0.625rem;

  .links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      font-size: 0.75rem;
      color: ${(props) => props.theme['blue']};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      padding-bottom: 0.188rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.4s;

      &:hover {
        border-bottom: 1px solid;
      }
    }
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .perfil-usuario {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const InfoDefailPostContainer = styled.div`
  padding: 2.5rem 2rem;

  p {
    font-weight: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`;
