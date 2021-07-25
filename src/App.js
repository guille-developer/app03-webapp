import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import SeedsCollection from "./components/SeedsColection";
import TrayList from "./components/TrayList";
import { Layout } from "./sections";
import NewCultureForm from "./components/NewCultureForm";
import EditCultureForm from "./components/EditCulture";
import RiegoComponentsList from "./components/Riego";

function App() {
  return (

    <BrowserRouter>
      <Layout>
    < RiegoComponentsList > < /RiegoComponentsList>

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
