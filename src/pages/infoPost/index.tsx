import { NavLink, useParams } from 'react-router-dom';
import { InfoDefailPostContainer, InfoPostContainer } from './style';

import iconeChevronLeft from '../../assets/icones/chevron-left.svg';
import iconeArrowUpRight from '../../assets/icones/arrow-up-right-from-square.svg';
import iconeGitHub from '../../assets/icones/github-brands.svg';
import iconeCalendarDay from '../../assets/icones/calendar-day.svg';
import iconeComment from '../../assets/icones/comment.svg';
import { useCallback, useEffect, useState } from 'react';
import type { IPost } from '../../interface/IPost';
import { api } from '../../lib/axios';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Markdown from 'react-markdown';

export function InfoPost() {
  const [infoPost, setInfoPost] = useState<IPost>({
    id: 0,
    login: '',
    created_at: new Date(),
    title: '',
    body: '',
    comments: 0,
    number: 0,
    html_url: '',
  });

  const { numberPost } = useParams();

  const fetchInfoPost = useCallback(async () => {
    const response = await api.get(`repos/viniciuspachecof/github-blog/issues/${numberPost}`);

    const { id, title, body, created_at, comments, number, html_url } = response.data;
    const login = response.data.user.login;

    setInfoPost({ id, title, body, created_at, comments, login, number, html_url });
  }, []);

  useEffect(() => {
    fetchInfoPost();
  }, []);

  return (
    <>
      <InfoPostContainer>
        <div className="links">
          <NavLink to="/">
            <img src={iconeChevronLeft} />
            VOLTAR
          </NavLink>

          <a href={infoPost.html_url} target="_blank">
            VER NO GITHUB
            <img src={iconeArrowUpRight} />
          </a>
        </div>
        <p>{infoPost.title}</p>
        <div className="perfil-usuario">
          <span>
            <img src={iconeGitHub} />
            {infoPost.login}
          </span>
          <span>
            <img src={iconeCalendarDay} />
            {formatDistanceToNow(infoPost.created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <img src={iconeComment} />
            {infoPost.comments > 1 ? `${infoPost.comments} comentários` : `${infoPost.comments} comentário`}
          </span>
        </div>
      </InfoPostContainer>

      <InfoDefailPostContainer>
        <Markdown>{infoPost.body}</Markdown>
      </InfoDefailPostContainer>
    </>
  );
}
