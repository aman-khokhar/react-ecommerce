import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './components/Homepage';
import NotFound from './components/Not-Found';
import Shop from './components/Pages/Shop/Shop';
import SingleProduct from './components/Single-product/Single-product';
import CartPage from './components/Pages/Cart-page/Cart-page';
import CheckoutPage from './components/Checkout-page/Checkout-page';
import SignUp from './components/Sign-up/Sign-up';
import SignIn from './components/Sign-in/Sign-in';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
