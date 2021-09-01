import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import ProductState from './Context/Products/ProductState'
import Principal from './Components/Principal'




function App() {
  return (
    <div className="App">
      <ProductState>
        <Principal />
      </ProductState>
    </div>
  );
}

export default App;
