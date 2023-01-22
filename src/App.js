
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
import AddProducts from './components/AddProducts/AddProducts';

function App() {

  useEffect((
    firebase.auth().onAuthStateChanged(user => {
      products.user = user
      console.log(user)
    })
  ), [])

  return (
    <div className="App">
      <div>

      </div>
      <div>
        <Routes>
          <Route path='/Home' element={<MainPage/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Favourites' element={<Favourites/>}/>
          <Route path='/AddProducts' element={<AddProducts/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default observer(App)
