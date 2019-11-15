import React, {Component} from 'react';
import './About.scss';
import dog from './img/dog1.jpg';

class About extends Component {
    render(){
        return (
            <div className="App-about mt-5">
                <div className="row mx-auto mb-5">
                    <div className="col-lg-6 col-sm-12 col-centered "><img src={dog} alt="about" /></div> 
                    <div className="col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2">
                        <h3>Heading 1</h3>
                        <p>Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum</p>
                    </div>
                </div>
                <div className="row mx-auto mb-5">
                    <div className="col-lg-6 col-sm-12 col-centered "><img src={dog} alt="about" /></div> 
                    <div className="col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2">
                        <h3>Heading 2</h3>
                        <p>Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum</p>
                    </div>
                </div>
                <div className="row mx-auto mb-5">
                    <div className="col-lg-6 col-sm-12 col-centered "><img src={dog} alt="about" /></div> 
                    <div className="col-lg-5 offset-lg-1 col-sm-12 col-centered pt-2">
                        <h3>Heading 3</h3>
                        <p>Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;