import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container className="App">
      <main>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <aside>
        <NavBar />
      </aside>
    </Container>
  );
}

export default App;
