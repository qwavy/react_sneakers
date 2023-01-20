import { observer } from "mobx-react-lite"
import products from "../../store/products"

const SortByCategory = ({setCopyProducts}) => {

    

    const filterCategory = (filterCategory) => {
        const filtered = products.products.filter((product) => product.category.includes(filterCategory))
        setCopyProducts(filtered)
    }
    return(
        <div className="category_button_list">
            <button onClick={() => filterCategory("technique")} className="category_button category_1" style={{backgroundColor:"#4FA3A5"}}> technique</button>
            <button onClick={() => filterCategory("office tools")}className="category_button category_2" style={{backgroundColor:"#63C5EA"}}>office tools</button>
            <button onClick={() => filterCategory("clothes")} className="category_button category_3" style={{backgroundColor:"#FA5396"}}>clothes</button>
            <button onClick={() => filterCategory("furniture")} className="category_button" style={{backgroundColor:"#FCB424"}}>furniture</button>
        </div>
    )
}
export default observer(SortByCategory)