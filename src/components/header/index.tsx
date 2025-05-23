import { HeaderContainer } from './style';

import logo from '../../assets/icones/github-blog-logo.svg';
import effectEsq from '../../assets/effect-header-esq.svg';
import effectDir from '../../assets/effect-header-dir.svg';

import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img className="effectEsq" src={effectEsq} />
      <NavLink to="/" title="home">
        <img src={logo} />
      </NavLink>
      <img className="effectDir" src={effectDir} />
    </HeaderContainer>
  );
}
