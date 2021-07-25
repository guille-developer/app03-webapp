import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./ibmlogin/Login";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import SeedsCollection from "./components/SeedsColection";
import { Layout } from "./sections";

function App() {
  const [token, setToken] = useState();

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
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
