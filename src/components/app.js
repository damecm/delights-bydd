import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import NavigationContainer from "./navigation/nav-container";
import Welcome from './pages/welcome';
import Menu from './pages/menu';
import AboutDD from "./pages/about-dd";
import Contact from "./pages/contact";
import Icons from "./helpers/fA";



import UnableToFind from './pages/unable-to-find';
import MenuPriceList from './pages/menu-price-list';

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();


    

  }

  
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />
            
            
            
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/menu" component={Menu}/>
              
              <Route path="/about-dd" component={AboutDD}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/menu-price-list" component={MenuPriceList}/>
              
              
              <Route component={UnableToFind}/>
            </Switch>
          </div>
        </Router>
                
      </div>
    );
  }
}

