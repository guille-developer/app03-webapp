import { Component } from "react";






function Bottonbar(props) {
    let pantallaActual = props.pantallaActual;

    let iconStyle = "h-1/12 w-6 m-auto"
    let activeStyle = "text-green-500"

    return <>
        <nav className="pt-4 bg-white shadow h-1/12 fixed bottom-0 w-full item-center text-gray-400">

            <ul className="flex h-full w-full justify-evenly item-center p-0.5">
                <li className={pantallaActual == "Home" ? activeStyle : ""}>

                    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>Home
                </li>
                <li className={pantallaActual == "Cultivo" ? activeStyle : ""}>

                    <svg xmlns="http://www.w3.org/2000/svg" className={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                    Cultivo
                </li>
                <li className={pantallaActual == "Riego" ? activeStyle : ""}>

                    <svg xmlns="http://www.w3.org/2000/svg" class={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>Riego
                </li>

            </ul>


            {/* <button>
                        <svg className="self-end h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> */}


        </nav>
    </>
}


export default Bottonbar;