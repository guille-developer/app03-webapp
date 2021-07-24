import { useState } from "react";

const Pagina1 = () => {
  const [resultado, setResultado] = useState();

  fetch("http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds")
    .then(res => res.json())
    .then(setResultado);

  console.log(resultado);

  return (
    <>
      {/* Hero section */}
      <section className="flex flex-col justify-center items-center text-center space-y-10 mt-30">
        {/* Headlines */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">Pagina 1</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold">
            <span className=" text-green-600 block">eGreens</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Pagina1;
