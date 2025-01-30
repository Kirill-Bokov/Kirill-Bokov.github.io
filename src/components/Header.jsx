import { Link } from "react-router-dom";
import '../styles/header.css'
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/tsaregrad">Цареград</Link>
          <Link to="/worldviews">Мировоззрения</Link>
          <Link to="/important-events">Недавние события</Link>
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Логотип" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/countries">Страны</Link>
          <Link to="/species">Виды</Link>
          <Link to="/nationalities">Национальности</Link>
          <Link to="/history">История</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
