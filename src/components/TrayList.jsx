import React, { Component, PureComponent } from 'react'
import Tray from './Tray';


class TrayList extends Component {
    componentDidMount() {
        const apiUrl = 'http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/farms/1/cultures/1';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(


                (data) => this.setState({ trays: data.tray.trays }))



    };
    state = {
        trays: []
    }
    render() {
        return (<>
            <div className="rounded container border-gray border-2 mt-12 m-auto bg-gray-100 w-10/12 h-5/12">

                {
                    this.state.trays.map(tray => <Tray idTray={tray.idTray} progress={tray.progress} stage={tray.stage} startDate={tray.startDate} />)
                    
                    
                    }
               
            </div>
        </>);
    }
}

export default TrayList;