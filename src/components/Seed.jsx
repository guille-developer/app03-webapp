import React, { Component, PureComponent } from 'react'



class Seed extends Component {
    state = {}
    render() {
        return (


            <>


                <div>

                    <p className="text-center">{this.props.title}</p>
                    <img className="rounded h-24" src={this.props.img}>
                    </img>
                </div>

            </>


        );
    }
}

export default Seed;