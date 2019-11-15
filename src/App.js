import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import {Route, Switch, Redirect} from 'react-router-dom';

class App extends Component{
  static defaultProps = {
    sites: [ "About","Option 2", "Option 3", "Option 4" 
    ]
  };

  render(){
    return (
      <div className="App">
        <Header />
        <Navbar sites={this.props.sites} />
        <div className="container-fluid">
          <Switch>
              <Route exact path="/website" render={() => <About />} />
              <Route exact path="/website/about" render={() => <About />} />
              <Route exact path="/website/option2"/>
              <Route exact path="/website/option3"/>
              <Route exact path="/website/option4"/>
              <Redirect to="/website" />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
