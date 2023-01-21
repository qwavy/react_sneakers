import products from "../../store/products"
import { observer } from "mobx-react-lite"

// продукты с mobx

// import { auth } from "../../firebase"
import { signInWithGoogle } from '../../firebase';

// firbase

import './MainPage.css'
// стили на css

import cart_logo from '../../images/cart logo.png'
import likes from '../../images/likes.png'
import login_img from '../../images/login.png'
import adidas_ad from '../../images/adidas_superstar.png'

import grey_favourite from '../../images/grey_favourite.svg'
import red_favourite from '../../images/red_favourite.png'

import star from '../../images/star.png'

import added_cart from '../../images/added_cart.svg'
import add_cart from '../../images/add_cart.png'
// картинки для верстки

import SortProducts from './../SortProducts/SortProducts';
import SearchProducts from "../SearchProducts/SearchProducts"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SortByCategory from "../SortProducts/SortByCategory";

// другие компоненты




const MainPage = () => {


    const [copyProducts, setCopyProducts] = useState([...products.products])

    useEffect(() => {
        setCopyProducts(products.products)
    }, [products.products])

    useEffect(() => {
        const result = products.favouritesProducts.filter(product => product.favourite = false)
    }, [products.products])



    const HandleFavourite = (id) => {
        products.products[id - 1].favourite = !products.products[id - 1].favourite


        if (!products.favouritesProducts.includes(products.products[id - 1])) {
            products.favouritesProducts.push(products.products[id - 1])
        }
        if (products.products[id - 1].favourite == false) {
            products.favouritesProducts.splice(id - 1, 1)
        }

    }
    const HandleCart = (id) => {
        if (products.products[id - 1].isCart === false) {

            products.products[id - 1].isCart = !products.products[id - 1].isCart
            products.cart.push(products.products[id - 1])
        }
        else {
            products.products[id - 1].isCart = !products.products[id - 1].isCart

        }
        console.log(products.products[id - 1].title)
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

                    {products.user ? <Link to="/Profile"><img src={products.user._delegate.photoURL} className="user_photo" /></Link> : <img src={login_img} alt='photo_image' onClick={signInWithGoogle} />}

                </div>
            </header>
            <div className="content">
                <div className="products">
                    <h1>products</h1>
                    <SearchProducts />
                </div>
                <div className="sort_container">

                    <SortProducts />

                        <SortByCategory setCopyProducts={setCopyProducts} />
                </div>


                <div className="products_list">
                    {copyProducts.map((product) => <div className='product_card' key={product.id}>
                        <div className="favourite_button">
                            {product.favourite ? <img onClick={() => HandleFavourite(product.id)} src={red_favourite} className="test" /> : <img onClick={() => HandleFavourite(product.id)} src={grey_favourite} className="test" />}
                        </div>

                        <img src={product.image} className="product_image" />
                        <p className="product_title">{product.title}</p>
                        <p className="product_description">{product.description}</p>
                        <div className='product_price'>
                            <p>{product.price}$</p>
                            <div className='product_cart_image'>

                                {product.isCart ? <img onClick={() => HandleCart(product.id)} src={added_cart} /> : <img onClick={() => HandleCart(product.id)} src={add_cart} className="product_cart_image" />}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>


        </div>
    )
}
export default observer(MainPage)