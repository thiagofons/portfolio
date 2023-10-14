import { useEffect } from "react";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./contexts/ThemeContext";

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
          <WorkExperiencePage />
          <ProjectsPage />
          <ContactPage />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
