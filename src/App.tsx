import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container className="App">
      <aside className="aside">
        <NavBar />
      </aside>
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
