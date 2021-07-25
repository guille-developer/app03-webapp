import React, { Component } from 'react';


class Tray extends Component {
    state = {}
    render() {
        let startDate = new Date(this.props.startDate);
        let date = startDate.getDay() + "/" + startDate.getMonth() + "/" + startDate.getFullYear();
        let progress = Math.round((12 * this.props.progress) / 100
        );
        return (
            <>



                <div className="bg-white m-2 p-2">
                    <div className="flex justify-between m-2">  <h1>Tray {this.props.idTray}</h1> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg> </div>




                    <div className="flex justify-between m-2">  <h1>Start Date: </h1>  <h1>{date}</h1> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg></div>
                    <div>
                        <div className="bg-white rounded-lg  shadow block p-4 m-auto">
                            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                                <div className={"w-" + progress + "/12 h-full text-center text-xs text-white bg-green-500 rounded-full"}>
                                    {this.props.progress}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between m-2">  <h1>Status: </h1>  <h1>{this.props.stage}</h1> </div>
                   



                    <div className="text-center ">
                        <button className="rounded p-2 m-10 text-white bg-gradient-to-r from-green-400  to-green-800">
                            New Culture
                        </button>
                    </div>

                </div>


            </>
        )
    }
}

export default Tray;