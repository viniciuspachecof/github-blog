import { ContainerListPost, FormContainerPublicacoes, InfoAuthorContainer } from './style';
import iconeGitHub from '../../assets/icones/github-brands.svg';
import iconeBuilding from '../../assets/icones/building.svg';
import iconeUser from '../../assets/icones/user-group.svg';
import iconeArrowUpRight from '../../assets/icones/arrow-up-right-from-square.svg';
import { Post } from '../../components/post';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../contexts/PostsContext';

export function Home() {
  const { posts, user, fetchPosts } = useContext(PostsContext);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    buscarPost(debouncedSearch);
  }, [debouncedSearch]);

  function buscarPost(query: string) {
    fetchPosts(query);
  }

  return (
    <>
      <InfoAuthorContainer>
        <img className="img-usuario" src={user.avatar_url} />
        <div className="info-usuario">
          <div className="nome-usuario">
            <h2>{user.name}</h2>
            <a href={user.html_url} target="_blank">
              GITHUB <img src={iconeArrowUpRight} />
            </a>
          </div>
          <p>{user.bio}</p>
          <div className="perfil-usuario">
            <span>
              <img src={iconeGitHub} />
              {user.login}
            </span>
            <span>
              <img src={iconeBuilding} />
              {user.company}
            </span>
            <span>
              <img src={iconeUser} />
              {user.followers > 1 ? `${user.followers} seguidores` : `${user.followers} seguidor`}
            </span>
          </div>
        </div>
      </InfoAuthorContainer>

      <FormContainerPublicacoes>
        <div>
          <span>Publicações</span>
          <span>{posts.length === 1 ? `${posts.length} publicação` : `${posts.length} publicações`}</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" onChange={(e) => setSearch(e.target.value)} />
      </FormContainerPublicacoes>

      <ContainerListPost>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ContainerListPost>
    </>
  );
}
