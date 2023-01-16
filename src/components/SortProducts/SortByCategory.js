import { observer } from "mobx-react-lite"
import products from "../../store/products"

const SortByCategory = () => {

    

    const filterCategory = (filterCategory) => {
        const filtered = products.products.filter((product) => product.category.includes(filterCategory))
        products.products = filtered
        console.log(filtered)
    }
    return(
        <div>
            <button onClick={() => filterCategory("technique")}>technique</button>
            <button onClick={() => filterCategory("office tools")}>office tools</button>
            <button onClick={() => filterCategory("clothes")}>clothes</button>
            <button onClick={() => filterCategory("furniture")}>furniture</button>
        </div>
    )
}
export default observer(SortByCategory)