import { Component } from "react";
import logo from '../assets/img/logo.png'




class NavBar extends Component {
    state = {}
    render() {
        let iconStyle = "h-1/12 w-6 m-auto "
         return <>
            <nav className="bg-green-500 h-1/12 fixed top-0 w-full item-center text-white">

                <ul className="px-8 flex h-full w-full justify-between item-center p-0.5">
                    <li >
                        <img className="h-16 w-16" src={logo} alt="logo eGreens" />
                    </li>

                    <li>

                        <button>
                            <svg className="self-end h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </li>

                </ul>





            </nav>
        </>
    }
}

export default NavBar;