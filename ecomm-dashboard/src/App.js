import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import MarkingImg from './MarkingImg';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
     <Router>
     
     <Route path="/add">
     <Protected Cmp={AddProduct} />
   {/* <AddProduct /> */}
     </Route>

     <Route path="/update/:id">
     <Protected Cmp={UpdateProduct} />
    {/* <UpdateProduct /> */}
     </Route>

      <Route path="/search">
     <Protected Cmp={SearchProduct} />
    {/* <UpdateProduct /> */}
     </Route>

     <Route path="/markingimg">
     <Protected Cmp={MarkingImg} />
   {/* <AddProduct /> */}
     </Route>

    <Route path="/list">
     <Protected Cmp={ProductList} />
    </Route>

     <Route path="/login"><Login /></Route>
     <Route path="/register"><Register /></Route>  
     
    </Router>
    </div>
  );
}

export default App;
