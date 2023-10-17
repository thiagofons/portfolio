import { useContext, useEffect } from "react";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";


import { PortfolioContext, PortfolioProvider } from "./contexts/PortfolioContext";
import "./styles/main.sass"
import TechStackPage from "./pages/TechStackPage";
import Footer from "./components/layout/Footer";

function App() {
  const {openMenu} = useContext(PortfolioContext);

  return (
    <PortfolioProvider>
      <Container className="App">        
        <main className={`main ${openMenu ? "blur" : ""}`}>
          <NavBar />
          <HomePage />
          <AboutMePage />
          <TechStackPage />
          <ProjectsPage />
          <ContactPage />
        </main>
        <Footer />
      </Container>
    </PortfolioProvider>
  );
}

export default App;
