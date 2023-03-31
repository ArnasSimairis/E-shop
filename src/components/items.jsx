import products from "../data/data";
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';



const Items = ({addProductToCart}) =>{


    return(
        <div className="d-flex row justify-content-evenly">
            {products.map(product => (
                <Card style={{width: '400px', height: '600px', marginTop: '25px'}} key={product.id}>
                    <Card.Img variant="top" src={product.imageUrl}/>
                        <Card.Body>
                            <Card.Title>
                                {product.name}
                            </Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button
                            onClick={() => {
                                addProductToCart(product)
                                }}
                            >add me</Button>
                        </Card.Body>

                </Card>
            ))}
        </div>
    )
}
export default Items