import React, { Component } from 'react';

let styleDatePicker = { "width": "20" };

class EditCultureForm extends Component {
    state = {}

    render() {
        return (


            <div className="rounded container border-gray border-2 mt-12 m-auto bg-gray-100 w-10/12 h-12/12">
                <form className="bg-white m-2 p-2">
                    <div className="flex justify-between m-2">  <h1>Tray </h1> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg> </div>




                    <div className="flex justify-between m-2">  <h1 className="ml-right">Start Date: </h1>
                        <input type="date" name="startDate" id="startDate" />

                    </div>

                    <div className="flex justify-between m-2">  <h1 className="ml-right">Start Time: </h1>
                        <input type="time" name="startTime" id="startTime" />

                    </div>
                    <div>



                        <div className="text-center ">
                            <button className="rounded p-2 m-10 text-white bg-gradient-to-r from-green-400  to-green-800">
                                Save
                            </button>
                        </div>
                        <div className="text-center ">
                            <button type="submit" className="rounded p-2 mb-10  text-white bg-gradient-to-r from-green-400  to-green-800">
                                End Culture
                            </button>
                        </div>
                        <div className="text-center ">
                            <button type="submit" className="rounded p-2  text-white bg-gradient-to-r from-green-400  to-green-800">
                                Cancel
                            </button>
                        </div>
                    </div>     </form >     </div>);
    }
}

export default EditCultureForm;