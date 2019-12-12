import React, {Component} from 'react';
import './About.scss';
import dog from './img/dog1.jpg';

class About extends Component {
    render(){
        return (
            <div className="App-about mt-5 fadeIn">
                <div className="row mx-auto mb-5">
                    <div className="col-lg-6 col-sm-12 col-centered "><img src={dog} alt="about" className="img-fluid" /></div> 
                    <div className="col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2">
                        <h3 className="mb-4">Page under development</h3>
                        <p>Work in progress</p>
                        <p>Made with ReactJS, routed with react-router, styled with SCSS</p>
                        <p>Gallery - bootstrap, react-awesome-spinners, axios</p>
                        <p>ToDo List - css flexbox</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;