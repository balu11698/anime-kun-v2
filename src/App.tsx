import { Provider } from "react-redux";
import { setupStore } from "./data/store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";

const store = setupStore();

const GlobalStyled = createGlobalStyle`
  body{
    margin: unset
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
