import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./ibmlogin/Login";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import { Layout } from "./sections";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/pagina1">
            <Pagina1 />
          </Route>
          <Route path="/pagina2">
            <Pagina2 />
          </Route>
          <Route path="/">
            <Home user={token.idTokenPayload.name} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
