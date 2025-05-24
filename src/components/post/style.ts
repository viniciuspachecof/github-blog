import styled from 'styled-components';

export const ContainerPost = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 0.625rem;
  transition: border-color 0.4s;
  cursor: pointer;

  div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      flex: 4;
      font-weight: bold;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      flex: 1;
      text-align: right;
    }
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.5em; /* Altura de linha */
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: calc(1.5em * 4);
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`;
