// import products from "../../store/products"
import { observer } from "mobx-react-lite"
import { useState, useEffect } from "react"

import sort_icon from '../../images/sort-icon.png'

import products from "../../store/products"


const SortProducts = () => {

    const [selectValue, setSelectValue] = useState("")

    

    useEffect(() => {
        switch (selectValue) {
            case "popularity":
                sortByPopularity()
                break;
            case "priceHigh":
                sortByPrice()
                break;
            case "priceLow":
                sortByPriceLow()
                break;
            case "rating":
                sortByRating()
                break;

        }
    }, [selectValue])


    
    const sortByPopularity = () => {
        products.products.sort((a, b) => b.rating.count - a.rating.count)
        
    }
    const sortByPrice = () => {
        products.products.sort((a, b) => a.price - b.price)
    }
    const sortByPriceLow = () => {
        products.products.sort((a, b) => b.price - a.price)
    
    }
    const sortByRating = () => {
        products.products.sort((a, b) => b.rating.rate - a.rating.rate)
    }

    return (    
        <>
            <div className="sort_icon">
                <img src={sort_icon} className="product_cart_image" style={{width: "40px"}}/>
                <select onChange={(event) => setSelectValue(event.target.value)} className="sort_select">
                    <option value="popularity">sort by popularity</option>
                    <option value="priceHigh">sort by price high</option>
                    <option value="priceLow">sort by price low</option>
                    <option value="rating">sort by rating</option>
                </select>
            </div>

        </>
    )
}
export default observer(SortProducts)