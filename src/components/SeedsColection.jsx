import React, { Component } from 'react';
import Seed from './Seed';
// http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds


class SeedsCollection extends Component {

    componentDidMount() {
        const apiUrl = 'https://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(


                (data) => this.setState({ seeds: data.seeds }))



    };
    state = {
        seeds: []
    }
    render() {
        return (<div className="flex flex-row justify-evenly m-auto mt-10  rounded h-2/12 w-11/12">



            {this.state.seeds.map(seed => <Seed title={seed.seedName} img="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/297638_2200-800x1200.jpg" />)
            }


        </div>);
    }
}

export default SeedsCollection;