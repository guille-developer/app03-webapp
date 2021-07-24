import React from "react";
import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
=======
import SeedsCollection from "./components/SeedsColection";
>>>>>>> 4357af63a78adada8fe02e80d735bd419df3fdf3
import { Layout } from "./sections";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <Layout>
      {/* Hero section */}



      <section className="flex flex-col justify-center items-center text-center space-y-10 pt-12 sm:pt-24 md:pt-32">
        {/* Headlines */}
        
        <div className="space-y-4 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
        </div>
      </section>
    </Layout>
>>>>>>> 4357af63a78adada8fe02e80d735bd419df3fdf3
  );
}

export default App;
