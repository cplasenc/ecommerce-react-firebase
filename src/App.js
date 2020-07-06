import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import Authentication from './pages/authentication/authentication'
import { auth } from './firebase/firebase.utils';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log(process.env.NODE_ENV);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={Authentication} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
