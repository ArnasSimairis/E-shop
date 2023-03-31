import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/NavBar"
import Container from "react-bootstrap/Container"

const ANavBar = () => {
    return (
        <NavBar>
            <Container>
                <Nav>
                    <h3>E-Shop</h3>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </Nav>
            </Container>
        </NavBar>
    )
}

export default ANavBar