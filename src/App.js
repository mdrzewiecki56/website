import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'normalize.css';
import ToDoList from './ToDoList';

class App extends Component{
  static defaultProps = {
    sites: [ "About","Gallery", "TodoList", "Option 4" ]
  };

  render(){
    return (
      <div className="App">
        <Header />
        <Navbar sites={this.props.sites} />
        <div className="container-fluid">
            <Switch>
              <Route exact path="/" render={() => <About />} />
              <Route exact path="/gallery" render={() => <Gallery perPage={9}/>}/>
              <Route exact path="/TodoList" render={() => <ToDoList/>}/>
              <Route exact path="/option4"/>
              <Route component={() => (<div>404 Not found <Redirect to="/" /></div>)} />
              
            </Switch>
        </div>
      </div>
    );
  }

}

export default App;
