import SeedsCollection from "../components/SeedsColection";
import TrayList from "../components/TrayList";
import NewCultureForm from "../components/NewCultureForm";
import EditCulture from "../components/EditCulture";
import RiegoComponentsList from "../components/Riego";
const Home = ({ user = "prueba" }) => {
  /*   const [resultado, setResultado] = useState();

  fetch("http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds")
    .then(res => res.json())
    .then(setResultado);

  console.log(resultado); */

  return (
    <>
      {/* Hero section */}
      <section className="flex flex-col justify-center items-center text-center space-y-10 mt-30">
        {/* Headlines */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-bold">
            <span className=" text-green-600 block">Bievenido! {user}</span>
          </h1>
          <SeedsCollection />
          <TrayList />
          <NewCultureForm />
          <EditCulture />
          <RiegoComponentsList />
        </div>
      </section>
    </>
  );
};

export default Home;
