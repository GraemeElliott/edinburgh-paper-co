import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/index/index.component';
import ProductDirectory from './components/product-directory/product-directory.component';


const App = () => {
  return (
    <Router>
      <div>

        <Route path='/' component={Index} exact />
        <Route path='/browse' component={ProductDirectory} exact />

      </div>
    </Router>
  );
};

export default App;
