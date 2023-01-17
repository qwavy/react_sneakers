import products from "../../store/products"

import { observer } from "mobx-react-lite"

import { signInWithGoogle } from '../../firebase';


import { Link } from "react-router-dom"

import cart_logo from '../../images/cart logo.png'
import login_img from '../../images/login.png'
import likes from '../../images/likes.png'
import trash_can from '../../images/Trash Can.png'
import arrow from '../../images/arrow.png'
import no_cart from '../../images/no_cart.png'

import './Cart.css'

const Cart = () => {

    const HandleDeleteCart = (id) => {
        const objWithIdIndex = products.cart.findIndex((obj) => obj.id === id);

        if(objWithIdIndex > -1){
            products.cart_total -= products.products[objWithIdIndex].price
        }
        if (objWithIdIndex > -1) {
            products.cart.splice(objWithIdIndex, 1);
        }
        for (let i = 0; i < products.cart.length; i++) {
            products.cart_total -= products.cart[i].price
        }
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

            <Link to="/Home"><img src={arrow} /></Link>
            <span>Back</span>
            <div className="cart_list">
                {products.cart.length > 0 ? products.cart.map((product) => <div className='cart_card' key={product.id}>
                    <img src={product.image} className="cart_image" />
                    <p>{product.title}</p>
                    <div className='cart_price'>
                        <div>

                            <p>{product.price}$</p>
                        </div>
                        <div>

                            <img src={trash_can} className="trash_can" onClick={() => HandleDeleteCart(product.id)} />
                        </div>
                    </div>
                </div>) : <div className="empty_cart"><img src={no_cart}/><p>cart is empty</p></div>}


            </div>
            <div className="total">
                <p>total {products.cart_total}$</p>
                <Link to="/Checkout"><button className="checkout_button">Checkout</button></Link>
            </div>
        </div>

    )
}
export default observer(Cart)