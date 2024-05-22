import "./app.css";
import Container from "./components/container";
import Brand from "./components/brand";
import Header from "./components/header";
import Nav from "./components/nav";
import Navbar from "./components/navbar";
import Content from "./components/content";

function App() {
  return (
    <Container>
      <Header>
        <Nav>
          <Brand>
            <div>Hello World!</div>
          </Brand>
          <Navbar />
        </Nav>
      </Header>
      <Content>Este é um conteudo!</Content>
    </Container>
  );
}

export default App;
