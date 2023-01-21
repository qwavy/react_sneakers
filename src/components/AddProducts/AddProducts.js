import { useState } from "react"
import products from "../../store/products"
import cap from '../../images/products/cap.png'

import './AddProducts.css'

const AddProducts = () => {

    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productDescription, setProductDescription] = useState()
    const [productCategory, setProductCategory] = useState()
    const [productImage, setProductImage] = useState(cap)

    const AddProducts = () => {
        products.products.push({
            id: products.products.length + 1,
            title: productName,
            price: +productPrice,
            description: productDescription,
            category: "clothes",
            image: productImage,
            rating: { rate: 0, count: 0 },
            favourite: false,
            discount: 0,
            isCart: false
        })
    }

    return (
        <div className="container">

            <div className="register_card">
                <div className="register_logo_div">

                    <div className="register_logo logo">
                        <p>add </p>
                    </div>
                </div>
                <div className="register_content">
                    <label for="email" className="register_email_label">Your product name</label>
                    <input
                        className="register_input"
                        type="text"
                        onChange={(e) => setProductName(e.target.value.toLowerCase())}
                        placeholder="Enter your product name"
                        value={productName}
                    />
                    <label for="email" className="register_email_label">Your product price</label>
                    <input
                        className="register_input"
                        type="number"
                        onChange={(e) => setProductPrice(e.target.value.toLowerCase())}
                        placeholder="Enter your product price"
                        value={productPrice}
                    />
                    <label for="email" className="register_email_label">Your product description</label>
                    <div className="register_email">
                        <input
                            className="register_input"
                            type="text"
                            onChange={(e) => productDescription(e.target.value.toLowerCase())}
                            placeholder="Enter your product description"
                            value={productDescription}
                        />
                    </div>
                    <label for="password" className="register_password_label">Select your product category</label>
                    <div className="register_password">
                        <select onChange={(event) => setProductCategory(event.target.value)} className="sort_select">
                            <option value="technique">technique</option>
                            <option value="office tools">office tools</option>
                            <option value="clothes">clothes</option>
                            <option value="furniture">furniture</option>
                        </select>
                    </div>
                    <div className="register_button_div">
                        <button onClick={AddProducts} className="register_button">Submit</button>
                    </div>
                    {/* <button onClick={signInWithEmailAndPassword}>Clcik</button> */}

                </div>
            </div>
        </div>
    )
}
export default AddProducts