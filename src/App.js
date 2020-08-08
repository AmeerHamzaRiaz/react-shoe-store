import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import MenuBar from './components/MenuBar';
import CartCheckout from './views/CartCheckoutPage';
import ItemPage from './views/ItemPage';
import NotFound from './views/NotFoundPage';
import LandingPage from './views/LandingPage';
import StorePage from './views/StorePage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <GlobalProvider>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/item/:id" component={ItemPage} />
        <Route exact path="/cart" component={CartCheckout} />
        <Route path="*" component={NotFound} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
