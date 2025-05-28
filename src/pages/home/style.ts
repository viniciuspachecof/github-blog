import styled from 'styled-components';

export const InfoAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #0b1b2b;
  padding: 2rem 2.5rem;
  margin-top: calc(0px - 6.625rem);
  border-radius: 0.625rem;

  .img-usuario {
    max-width: 9.25rem;
    border-radius: 0.5rem;
  }

  .info-usuario {
    flex: 1;

    .nome-usuario {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        font-size: 0.75rem;
        color: ${(props) => props.theme['blue']};
        padding-bottom: 0.188rem;
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.4s;

        &:hover {
          border-bottom: 1px solid;
        }
      }
    }

    .perfil-usuario {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 2rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

export const FormContainerPublicacoes = styled.form`
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    span {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 0.375rem;
    color: ${(props) => props.theme['base-label']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme['blue']};
    }
  }
`;

export const ContainerListPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0 7rem;
`;
