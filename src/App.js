
import { observer } from 'mobx-react-lite';


import { useEffect } from 'react';


import products from './store/products';
import firebase from "./firebase"

import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './components/MainPage/MainPage';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Cart/Checkout/Checkout';
import Favourites from './pages/Favourites/Favourites';
import Profile from './components/Profile.js/Profile';


function App() {

  useEffect((
    firebase.auth().onAuthStateChanged(user => {
      products.user = user
      console.log(user)
    })
  ), [])

  return (
    <div className="App">
      {/* <MainPage/> */}
      <div>
        <Link to="/Profile">Profile</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Checkout">Checkout</Link>
        <Link to="/Favourites">Favourites</Link>
      </div>
      <div>
        <Routes>
          <Route path='/Home' element={<MainPage/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Favourites' element={<Favourites/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default observer(App)
