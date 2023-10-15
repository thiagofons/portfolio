import { useEffect } from "react";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/main.sass"
import TechStackPage from "./pages/TechStackPage";
import Footer from "./components/layout/Footer";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <Container className="App">
        <NavBar />
        <main className="main">
          <HomePage />
          <AboutMePage />
          <TechStackPage />
          <ProjectsPage />
          <ContactPage />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
