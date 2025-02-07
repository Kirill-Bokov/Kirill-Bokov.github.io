import { Link } from "react-router-dom";
import "../styles/header.css";
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-menu">
          <div className="nav-menu__item">
            <Link to="/tsaregrad">Цареград</Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/worldviews">Мировоззрения</Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/important-events">Недавние события</Link>
          </div>
          <div className="nav-menu__item logo">
          <Link to="/">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Логотип" />
          </Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/countries">Страны</Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/species">Виды</Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/nationalities">Национальности</Link>
          </div>
          <div className="nav-menu__item">
            <Link to="/history">История</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
