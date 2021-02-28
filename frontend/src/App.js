import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/index/index.component';
import ProductDirectory from './components/product/product-directory/product-directory.component';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Index}  />
        <Route exact path='/products' component={ProductDirectory} />
      </Switch>
    </div>
        
  );
};

export default App;
