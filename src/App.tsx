import { FunctionComponent } from "react";
import "./App.css";
import { Auth, Header } from "./components";
import { Container } from "./styles";

const App: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Auth />
    </Container>
  );
};

export default App;
