import React, {Component} from 'react';
import './About.scss';
import dog from './img/dog1.jpg';

console.log(dog);

class About extends Component {
    render(){
        return (
            <div className="App-about mt-5">
                <div className="row mx-auto">
                    <img src={dog} alt="about" className="col-lg-5 col-sm-12 col-centered"/>
                    <div className="col-lg-5 col-sm-12 col-centered">Lorem impsum</div>
                </div>
            </div>
        );
    }
}

export default About;