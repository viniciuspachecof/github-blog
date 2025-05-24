import { ContainerListPost, FormContainerPublicacoes, InfoAuthorContainer } from './style';
import logoAvatar from '../../assets/avatar.svg';
import iconeGitHub from '../../assets/icones/github-brands.svg';
import iconeBuilding from '../../assets/icones/building.svg';
import iconeUser from '../../assets/icones/user-group.svg';
import iconeArrowUpRight from '../../assets/icones/arrow-up-right-from-square.svg';
import { Post } from '../../components/post';

export function Home() {
  return (
    <>
      <InfoAuthorContainer>
        <img src={logoAvatar} />
        <div className="info-usuario">
          <div className="nome-usuario">
            <h2>Vinicius Pacheco Ferreira</h2>
            <a href="https://github.com/" target="_blank">
              GITHUB <img src={iconeArrowUpRight} />{' '}
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
            malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <div className="perfil-usuario">
            <span>
              <img src={iconeGitHub} />
              viniciuspachecof
            </span>
            <span>
              <img src={iconeBuilding} />
              Rocketseat
            </span>
            <span>
              <img src={iconeUser} />
              32 seguidores
            </span>
          </div>
        </div>
      </InfoAuthorContainer>

      <FormContainerPublicacoes>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainerPublicacoes>

      <ContainerListPost>
        <Post />
        <Post />
        <Post />
        <Post />
      </ContainerListPost>
    </>
  );
}
