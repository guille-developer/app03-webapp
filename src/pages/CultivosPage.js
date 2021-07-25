import { useState, useEffect } from "react";
import SeedsCollection from "src/components/SeedsColection";
import TrayList from "src/components/TrayList";

const Pagina1 = () => {
  const [resultado, setResultado] = useState();

  useEffect(() => {
    fetch("http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds")
      .then(res => res.json())
      .then(setResultado);
  }, []);
  console.log(resultado);
  return (
    <>
      {/* Hero section */}
      <section >
        {/* Headlines */}
        <div className="space-y-4" >
       
          <h1 className="text-center text-green-800 text-4xl	">Cultures</h1>
          <SeedsCollection />

          <TrayList />
          
        </div>
      </section>
    </>
  );
};

export default Pagina1;
