import products from "../../store/products"
import { observer } from "mobx-react-lite"

// продукты с mobx

import { auth } from "../../firebase"
import { signInWithGoogle } from '../../firebase';

// firbase

import './MainPage.css'
// стили на css

import cart_logo from '../../images/cart logo.png'
import login_img from '../../images/login.png'
import likes from '../../images/likes.png'
import adidas_ad from '../../images/adidas_superstar.png'

// картинки для верстки

import SortProducts from './../SortProducts/SortProducts';
import SearchProducts from "../SearchProducts/SearchProducts"

// другие компоненты



const MainPage = () => {

    const HandleFavourite = (id) => {
        products.products[id].favourite = true
    } 

    return (
        <div className="container">

            <button className="button signout" onClick={() => auth.signOut()}>signOUT</button>

                <header>
                    <div className="logo">
                        <span>shopCart</span>
                    </div>
                    <div className="navbar">
                        <img src={cart_logo} />
                        <img src={likes} />
                        {products.user ? <img src={products.user._delegate.photoURL} className="user_photo"/> : <img src={login_img} alt='photo_image' />}
                        
                    </div>
                </header>
                <div className="content">
                    <img src={adidas_ad} />
                    <div className="products">
                        <h1>products</h1>
                        {/* <div className="search"> */}
                        {/* <input className="search" placeholder="Search" /> */}
                        <SearchProducts/>
                        {/* </div> */}
                    </div>
                    <SortProducts/>
                    <div className="products_list">
                        {products.products.map((product) => <div className='product_card' key={product.id}>
                            <img src={product.image} className="product_image"/>
                            <p>{product.title}</p>
                            <div className='products_price'>
                                <p>{product.price}$</p>
                                {/* <p className='discount'>-{product.discount}% off</p> */}
                            </div>
                            <button onClick={() => HandleFavourite(product.id)}>favourite</button>
                        </div>)}
                    </div>
                </div>


        </div>
    )
}
export default observer(MainPage)