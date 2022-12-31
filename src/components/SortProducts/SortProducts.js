import products from "../../store/products"
const SortProducts = () => {

    const sortByPrice = () => {
        const sorted = products.products.sort((a, b) => a.price - b.price)
    }
    const sortByPriceLow = () => {
        const sorted = products.products.sort((a, b) => b.price - a.price)
    }
    const sortByRating = () => {
        const sorted = products.products.sort((a, b) => b.rating.rate - a.rating.rate)
    }

    return(
        <>
            <button onClick={sortByPrice}>sort by price high</button>
            <button onClick={sortByPriceLow}>sort by price low</button>
            <button onClick={sortByRating}>sort by price rating</button>
        </>
    )
}
export default SortProducts