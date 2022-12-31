import { useState,useEffect } from "react"
import products from "../../store/products"

// products

const SearchProducts = () => {

    const [productsCopy,setProductsCopy] = useState([...products.products])

    const [searchValue,setSearchValue] = useState("")


    useEffect(() => {
        const filtered = productsCopy.filter((product) => product.title.includes(searchValue))
        console.log(productsCopy)
        products.products = filtered
    }, [searchValue])

    return(
        <>
            <input onChange={(e) => setSearchValue(e.target.value.toLowerCase())}  className="search" placeholder="Search"/>

        </>
    )
}
export default SearchProducts