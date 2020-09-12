import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function SearchNav(){
    return(
        <Navbar bg="dark" variant="dark">
            <Link to="/" class="nav-brand">BaBaBaBaBooooooks!</Link>
            <Nav className="mr-auto">
            <Link to="/" class="nav-links">Search Books</Link>
            <Link to="/saved" class="nav-links">Saved Books</Link>
            </Nav>
        </Navbar>
    )
}

export default SearchNav;