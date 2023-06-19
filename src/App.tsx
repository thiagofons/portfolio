import { useEffect } from "react";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <Container className="App">
      <NavBar />
      <main className="main">
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </Container>
  );
}

export default App;
