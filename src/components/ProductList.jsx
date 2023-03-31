import React from "react"
import Items from "./items"
const ProductList = ({addProductToCart}) =>  {
    return(
        <div>
            <Items addProductToCart={addProductToCart}/>
        </div>
    )
}
export default ProductList