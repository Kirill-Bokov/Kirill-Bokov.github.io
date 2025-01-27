import { Link } from "react-router-dom";
import '../styles/header.css'
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/project-delta/tsaregrad">Цареград</Link>
          <Link to="/project-delta/worldviews">Мировоззрения</Link>
          <Link to="/project-delta/important-events">Недавние события</Link>
        </div>
        <div className="nav-logo">
          <Link to="/project-delta">
            <img src="/logo.svg" alt="Логотип" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/project-delta/countries">Страны</Link>
          <Link to="/project-delta/species">Виды</Link>
          <Link to="/project-delta/nationalities">Национальности</Link>
          <Link to="/project-delta/history">История</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
