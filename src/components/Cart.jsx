import React from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Cart = ({cartProduct, removeAll, increaseQuantity, decreaseQuantity}) =>  {

    const TheCart = cartProduct
    console.log(TheCart);


    return(
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TheCart.map((product, index) =>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{product.name}</td>
                                <td>
                                    <Button onClick={()=>{decreaseQuantity(product)}}> - </Button>
                                    {product.quantity}
                                    <Button onClick={()=>{increaseQuantity(product)}}>+</Button>
                                </td>
                                <td>{product.price}€</td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Button onClick={removeAll}>Reset</Button>
        </div>
    )
}
export default Cart