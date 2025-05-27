import { NavLink } from 'react-router-dom';
import { ContainerPost } from './style';
import type { IPost } from '../../interface/IPost';

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Post(props: IPost) {
  return (
    <NavLink to="/infoPost" style={{ textDecoration: 'none' }}>
      <ContainerPost>
        <div>
          <h3>{props.title}</h3>
          <span>
            {formatDistanceToNow(props.created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <p>{props.body}</p>
      </ContainerPost>
    </NavLink>
  );
}
