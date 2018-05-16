/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, HashRouter } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
// import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
// import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
// import '../fonts/iconic/css/material-design-iconic-font.min.css';

import '../styles/style.css';

import HomepageWrapper from '../containers/HomepageWrapper';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
      <div>    
          <Route exact path="/" 
              render={() => (
                  <Redirect to="/homepage"/>
              )}
          />
          <Route path="/homepage" component={HomepageWrapper} />
      </div>
      </HashRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
