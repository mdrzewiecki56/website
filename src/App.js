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
        <div className="container">
          <Switch>
              <Route exact path="/" render={() => <About />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/option2"/>
              <Route exact path="/option3"/>
              <Route exact path="/option4"/>
              <Redirect to="/about" />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
