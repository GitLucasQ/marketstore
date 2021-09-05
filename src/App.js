import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import ProductState from './Context/Products/ProductState'
import Navigation from './Components/Navigation'
import Principal from './Components/Principal'
import Checkout from './Components/Checkout'




function App() {
  return (
    <div className="App">
      <ProductState>
        <Navigation />
        <Switch>
          <Route path='/' component={Principal} exact />
          <Route path='/checkout' component={Checkout} exact />
        </Switch>
      </ProductState>
    </div>
  );
}

export default App;
