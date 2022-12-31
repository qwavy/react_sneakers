
import { observer } from 'mobx-react-lite';


import { useEffect } from 'react';


import products from './store/products';
import firebase from "./firebase"

import { Routes, Route, Link } from 'react-router-dom'

import MainPage from './components/MainPage/MainPage';


function App() {

  useEffect((
    firebase.auth().onAuthStateChanged(user => {
      // setUser(user);
      products.user = user
      console.log(user)
    })
  ), [])

  return (
    <div className="App">
      <MainPage/>
      <div>
        <Link to="/Profile">Profile</Link>
        <Link to=""></Link>
        <Link to=""></Link>
      </div>
      <div>
        <Routes>
          <Route path='/Home' element={<MainPage/>}/>
          {/* <Route path='/Profile' element={<Profile/>}/> */}
        </Routes>
      </div>
    </div>
  );
}

export default observer(App)
