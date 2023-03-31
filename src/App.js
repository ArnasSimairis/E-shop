import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";

import ANavBar from './components/NavBar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {

  const [cartProduct, setcartProduct] = useState([])


  const addProductToCart = (product) => {

      // console.log(product);

    const newArr = [...cartProduct]

    console.log(newArr);

    let productInCart = newArr.find(
        (localVar) => product.id ===localVar.id
    )
        

    if(productInCart === undefined && product.countInStock > 0){
        let productInCart ={
            ...product,
            quantity:1,
        }
        newArr.push(productInCart)
        console.log(newArr);
        console.log(productInCart);
    }
    else if(productInCart.quantity < product.countInStock){
      productInCart.quantity++
    }

    setcartProduct(newArr) ;
          
    }


  const removeAll = () =>{
    setcartProduct([])
    console.log(cartProduct);
  }

  const increaseQuantity = (product) => {
    const newArr = [...cartProduct];

    let productInCart = newArr.find(
            (localVar) => product.id ===localVar.id
    )

    if(productInCart && productInCart.quantity < product.countInStock){
      productInCart.quantity++
    }
    
    setcartProduct(newArr)
  }

  const decreaseQuantity = (product) => {
    const newArr = [...cartProduct];

    let productInCart = newArr.find(
            (localVar) => product.id ===localVar.id
    )

    if(productInCart && productInCart.quantity > 1){
      productInCart.quantity--
    }else{
      newArr.splice(newArr.indexOf(productInCart), 1)
    }
    
    setcartProduct(newArr)
  }

  return (
      <div>
        <BrowserRouter>
        <ANavBar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductList addProductToCart={addProductToCart}/>}/>
            <Route path='/cart' element={<Cart cartProduct={cartProduct} removeAll={removeAll} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
