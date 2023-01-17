import { useState } from 'react';
import './Checkout.css'


import { signInWithGoogle } from '../../../firebase';


import cart_logo from '../../../images/cart logo.png'
import likes from '../../../images/likes.png'
import login_img from '../../../images/login.png'

import { observer } from "mobx-react-lite"

import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { Link } from 'react-router-dom';
import products from '../../../store/products';

import CustomAlert from '../../../components/CustomAlert/CustomAlert';
// import observer from './../Cart';

const Checkout = () => {
    const [emailInformation, setEmailInformation] = useState("")
    const [nameformation, setNameInformation] = useState("")
    const [lastNameInformation, setLastNameInformation] = useState("")
    const [countryInformation, setCountryInformation] = useState("")
    const [cityInformation, setCityInformation] = useState("")
    const [adressInformation, setAdressInformation] = useState("")
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const CheckoutConform = () => {
        products.orderInformation.push({
            email: emailInformation,
            name: nameformation,
            lastName: lastNameInformation,
            country: countryInformation,
            city: cityInformation,
            adress: adressInformation
        })
        products.cart = []
        products.cart_total = 0
        console.log(products.orderInformation)
    }

    return (
        <div className='container'>
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
            <div className='contact'>
                <h1>Contact information</h1>
                <input className="card_details" placeholder='Email' type="email" onChange={(e) => setEmailInformation(e.target.value)} />
                <div className='checkbox_div'>
                    <input type="checkbox" className='checkbox' />
                    <span>Email me with news and offers</span>
                </div>
            </div>
            <div className='shipping'>
                <h1>Shipping addres</h1>
                <input placeholder='First Name' className='name_details' onChange={(e) => setNameInformation(e.target.value)} />
                <input placeholder='Last Name' className='name_details' onChange={(e) => setLastNameInformation(e.target.value)} />
                <div className='country_div'>
                    <input placeholder='Country' className='card_details' onChange={(e) => setCountryInformation(e.target.value)} />
                </div>
                <div className='city_div'>
                    <input placeholder='City' className='card_details' onChange={(e) => setCityInformation(e.target.value)} />
                </div>
                <div className='adress_div'>
                    <input placeholder='Adress' className='card_details' onChange={(e) => setAdressInformation(e.target.value)} />
                </div>
            </div>
            <div className='payment'>
                <h1>Payment</h1>
                <PaymentInputsWrapper {...wrapperProps}>
                    <svg {...getCardImageProps({ images })} />
                    <input {...getCardNumberProps()} />
                    <input {...getExpiryDateProps()} />
                    <input {...getCVCProps()} />
                </PaymentInputsWrapper>
            </div>
            {/* <Link to="/Home">            <button className='conform_button' onClick={CheckoutConform}>conform</button></Link> */}


            <div className='checkout_total'>
                <p className='red'>total {products.cart_total}</p>
                <p className='green'>delivery 0</p>
            </div>
            {products.user ? <button className='conform_button' onClick={CheckoutConform}>confirm</button> : <CustomAlert/>}

        </div>

    );
}
export default observer(Checkout)