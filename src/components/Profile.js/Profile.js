import products from "../../store/products"


import cart_logo from '../../images/cart logo.png'
import likes from '../../images/likes.png'
import login_img from '../../images/login.png'


import firebase

from "../../firebase"
import { Link } from "react-router-dom";
import { auth } from "../../firebase"
import { signInWithGoogle } from '../../firebase';

import { useState, useEffect } from 'react';

import './Profile.css'


const Profile = () => {

    const [yourOrders, setYourOrders] = useState([])




    useEffect(() => {
        const result = products.orderInformation.filter(order => order.email == products.user.email)
        setYourOrders(result)
    }, [products.orderInformation])

    const LogOut = () => {
        firebase.logout()
        products.user = null
    }

    const click = () => {
        console.log(products.user)
    }
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <span>shopCart</span>
                </div>
                <div className="navbar">
                    <Link to="/Cart">
                        <img src={cart_logo} />
                    </Link>                    
                    <Link to="/Favourites">
                        <img src={likes} />
                    
                    </Link>
                    
                        {products.user ? <Link to="/Profile"><img src={products.user._delegate.photoURL} className="user_photo" /></Link> : <img src={login_img} alt='photo_image' onClick={signInWithGoogle}/>}

                </div>
            </header>
            <div className="profile_info">
                <button onClick={click}>text</button>
                <h1>Profile</h1>
                <div className="profile_avatar">
                    <img src={products.user._delegate.photoURL} className="profile_avatar"/>
                </div>
                    <h1 className="profile_name">{products.user.displayName}</h1>
                    <p className="profile_email">{products.user.email}</p>
            </div>
            <div>
                <h1>Orders</h1>
                {yourOrders.map((order) => <div key={order.length + 1} className="order">
                    <p>recipient name:{order.name}</p>
                    <p>country {order.country}</p>
                    <p>city: {order.city}</p>
                    <p>adress {order.adress}</p>

                </div>)}
            </div>
            <button  onClick={() => auth.signOut()}>signout</button>
            <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}
export default Profile