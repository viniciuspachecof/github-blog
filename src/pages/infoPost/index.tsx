import { NavLink } from 'react-router-dom';
import { InfoDefailPostContainer, InfoPostContainer } from './style';

import iconeChevronLeft from '../../assets/icones/chevron-left.svg';
import iconeArrowUpRight from '../../assets/icones/arrow-up-right-from-square.svg';
import iconeGitHub from '../../assets/icones/github-brands.svg';
import iconeCalendarDay from '../../assets/icones/calendar-day.svg';
import iconeComment from '../../assets/icones/comment.svg';

export function InfoPost() {
  return (
    <>
      <InfoPostContainer>
        <div className="links">
          <NavLink to="/">
            <img src={iconeChevronLeft} />
            VOLTAR
          </NavLink>

          <a href="https://github.com/">
            VER NO GITHUB
            <img src={iconeArrowUpRight} />
          </a>
        </div>
        <p>JavaScript data types and data structures</p>
        <div className="perfil-usuario">
          <span>
            <img src={iconeGitHub} />
            viniciuspachecof
          </span>
          <span>
            <img src={iconeCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <img src={iconeComment} />5 comentários
          </span>
        </div>
      </InfoPostContainer>

      <InfoDefailPostContainer>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another.
          This article attempts to list the built-in data structures available in JavaScript and what properties they
          have. These can be used to build other data structures. Wherever possible, comparisons with other languages
          are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not
          directly associated with any particular value type, and any variable can be assigned (and re-assigned) values
          of all types:
        </p>
      </InfoDefailPostContainer>
    </>
  );
}
