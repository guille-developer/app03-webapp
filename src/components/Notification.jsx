import react, { Component } from "react";




class NotificationsItem extends Component {
    state = {}
    render() {
        return (
            <li className="shadow-lg bg-white rounded-xl h-1/12 w-10/12 text-center m-auto">
                <div className="flex">
                    {/* <div className="flex-shrink-0">
                        <img className="w-24 object-cover md:w-48" src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=448&q=80" alt="A cat" />
                    </div> */}
                    <div className="p-4">
                        <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">titulo prueba</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Notificacion de prueba</a>
                    </div>
                </div>
            </li>


        );
    }
}
