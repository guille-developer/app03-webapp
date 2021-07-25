import React, { Component } from 'react';



class RiegoElement extends Component {

    state = {}
    render() {

        return (
            <div className="rounded-2xl  container p-4 border-gray border-2 mt-12 m-auto bg-gray-100 w-10/12 h-5/12">

                <div className="space-y-10">
                <div className=" flex justify-between">
                    <h1>Water Pump</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>


                <div className="flex justify-between">
                    <h1>Mode</h1>                     
                    <div className="flex item-end">

                        <p className="text-xs text-gray-700">Manual</p>

                        <div className="m-1 relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"> 
                            <input type="checkbox" name="mode" id="mode" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                        <label for="toggle" className="text-xs text-gray-700">Automatico</label></div>
                </div>


                <div className="flex flex-col justify-between ">
                    <h1>Status: OPEN</h1>
                    <div className="flex justify-between pl-5">
                        <div className="m-1 relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="status" id="status" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                        </div>
                </div>
            </div></div>
        );
    }
}

export default RiegoElement;