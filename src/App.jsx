import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function Main() {
  const location = useLocation();

  const getContainerClass = () => {
    switch (location.pathname) {
      case "/project-delta":
        return "page-index";
      default:
        return "page-default";
    }
  };

  return (
    <>
      <Header />
      <div className={getContainerClass()}>
        <Routes>
          <Route path="/project-delta" element={<Content fileName="index.md" />} />
          <Route path="/project-delta/tsaregrad" element={<Content fileName="tsaregrad.md" />} />
          <Route path="/project-delta/worldviews" element={<Content fileName="worldviews.md" />} />
          <Route path="/project-delta/important-events" element={<Content fileName="important-events.md" />} />
          <Route path="/project-delta/countries" element={<Content fileName="countries.md" />} />
          <Route path="/project-delta/species" element={<Content fileName="species.md" />} />
          <Route path="/project-delta/nationalities" element={<Content fileName="nationalities.md" />} />
          <Route path="/project-delta/history" element={<Content fileName="history.md" />} />
          <Route path="*" element={<Content fileName="index.md" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
