import React from "react";
import "./App.css";
import SeedsCollection from "./components/SeedsColection";
import TrayList from "./components/TrayList";
import { Layout } from "./sections";

function App() {
  return (
    <Layout>
      {/* Hero section */}

    < SeedsCollection >
      </SeedsCollection>
< TrayList>
</TrayList>
      <section className="flex flex-col justify-center items-center text-center space-y-10 pt-12 sm:pt-24 md:pt-32">
        {/* Headlines */}
        
        <div className="space-y-4 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
        </div>
      </section>
    </Layout>
  );
}

export default App;
