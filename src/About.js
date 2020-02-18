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
                        <h3 className="mb-4">Welcome to my ReactJS playground</h3>
                        <p>Made with ReactJS, routed with react-router, styled with SCSS</p>
                        <p>Gallery - bootstrap, react-awesome-spinners, axios</p>
                        <p>ToDo List - css flexbox, media queries</p>
                        <p>If you fancy checking out an actual website being made with ReactJS, I have just started a new <a href="https://project-ebbcd.firebaseapp.com/" style={{display: "inline", cursor: "pointer", color: "#09ad8e"}}>project</a>.</p>
                        <p>Also, I have made recently a redux based <a href="https://github.com/mdrzewiecki56/redux-movies" style={{display: "inline", cursor: "pointer", color: "#09ad8e"}}>App</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;