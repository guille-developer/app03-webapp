import React, { Component } from 'react';
import Seed from './Seed';
import Chia from "../assets/img/Chia.jpg"
import Flax from "../assets/img/Flax.jpg"
import Lentils from "../assets/img/Lentils.jpg"
import Weat from "../assets/img/Weat.jpg"

// http://farmtechlat3.us-south.cf.appdomain.cloud/api/v1/seeds
let seedsImages = {
    "Flax": Flax,
    "Chia": Chia,
    "Lentils": Lentils, "Weat": Weat,
};


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



            {this.state.seeds.map(seed => <Seed title={seed.seedName} img={seedsImages[seed.seedName]} />)
            }


        </div>);
    }
}

export default SeedsCollection;