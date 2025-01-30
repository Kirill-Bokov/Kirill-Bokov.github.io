import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
function Main() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Content fileName="index.md" />} />
          <Route path="/tsaregrad" element={<Content fileName="tsaregrad.md" />} />
          <Route path="/worldviews" element={<Content fileName="worldviews.md" />} />
          <Route path="/important-events" element={<Content fileName="important-events.md" />} />
          <Route path="/countries" element={<Content fileName="countries.md" />} />
          <Route path="/species" element={<Content fileName="species.md" />} />
          <Route path="/nationalities" element={<Content fileName="nationalities.md" />} />
          <Route path="/history" element={<Content fileName="history.md" />} />
          <Route path="*" element={<Content fileName="index.md" />} />
        </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Main />
    </Router>
  );
}

export default App;
