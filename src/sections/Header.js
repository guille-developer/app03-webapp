import MobileNav from "../components/MobileNav";
import logo from "../assets/img/logo.png";

const Header = () => (
  <header className="sticky h-13 top-0 inset-x-0 flex bg-green-800 items-center justify-between p-4">
    <div>
      <a href="/" aria-label="eGreens">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <img src={logo} className="w-12 h-12" alt="Logo eGreens" />
          </div>
        </div>
      </a>
    </div>
    <div className="flex items-center text-base leading-5">
      <MobileNav />
    </div>
  </header>
);

export default Header;
