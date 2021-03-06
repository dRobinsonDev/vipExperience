import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from '../../components/Shop/Cart';
import Checkout from '../../components/Shop/Checkout';
import Products from '../../components/Shop/ProductList';
import { isAuthenticated } from '../../repository';


class ShopPage extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    const auth = isAuthenticated();
    return (
      <Switch>
        <Router>
          <div className="container">
            <br/>
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Checkout" component={Checkout} />
          </div>
        </Router>
      </Switch>
    );
  }
}

export default ShopPage;