import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LandingPage from "../LandingPage/LandingPage";
import Media from "../Media/Media";
import Store from "../Store/Store";
import About from "../About/About";
function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleEnter = () => {
    setShowLandingPage(false);
  };

  return (
    <div className="app">
      {showLandingPage ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/media" element={<Media />} />
              <Route path="/store" element={<Store />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
