import { NavLink } from 'react-router-dom';
import { ContainerPost } from './style';
import type { IPost } from '../../interface/IPost';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Markdown from 'react-markdown';

export function Post({ title, created_at, body, number }: IPost) {
  return (
    <NavLink to={`/infoPost/${number}`} style={{ textDecoration: 'none' }}>
      <ContainerPost>
        <div className="titulo-post">
          <h3>{title}</h3>
          <span>
            {formatDistanceToNow(created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <div className="body-post">
          <Markdown>{body}</Markdown>
        </div>
      </ContainerPost>
    </NavLink>
  );
}
