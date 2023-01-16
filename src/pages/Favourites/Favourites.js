import products from "../../store/products"
import { useEffect, useState } from 'react';

import { signInWithGoogle } from '../../firebase';
import { Link } from "react-router-dom"

import cart_logo from '../../images/cart logo.png'
import likes from '../../images/likes.png'
import login_img from '../../images/login.png'
import no_favourite from '../../images/no_fav.png'

import { observer } from "mobx-react-lite";
import SortProducts from "../../components/SortProducts/SortProducts";

import './Favourites.css'


const Favourites = () => {




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

                    {products.user ? <Link to="/Profile"><img src={products.user._delegate.photoURL} className="user_photo" /></Link> : <img src={login_img} alt='photo_image' onClick={signInWithGoogle} />}

                </div>
            </header>
            <h1>Favourite</h1>

            <div className="favourties_list">
                {products.favouritesProducts > 0 ? 
                    products.favouritesProducts.map((product) => <div className="favourites_card" key={product.id}>
                        <img src={product.image} />
                        <p className="favourite_title">{product.title}</p>
                        <p className="favourite_description">{product.description}</p>
                        <p className="favourite_price">{product.price}$</p>
                    </div>)
                : <div className="empty_cart"><img src={no_favourite}/><p>Favourite is empty</p></div>}

            </div>
        </div>
    )
}
export default observer(Favourites)