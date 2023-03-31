import React from "react"

import products from "../data/data"
import Carousel from 'react-bootstrap/Carousel'
console.log(products);
const Home = () => {
    return (
        <div>
            <Carousel>
                {products.map(product => (
                    <Carousel.Item key={product.id}>
                            <img className="opacity-50 w-100 h-auto" src={product.imageUrl} alt="Product pic"/>
                            <Carousel.Caption>
                                <h3 className="text-info">{product.name} </h3>
                                <p className="text-dark">{product.description}</p>
                            </Carousel.Caption>                            
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
export default Home

