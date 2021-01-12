import React from 'react';
import Container from './Container';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-light bg-danger">
            <Container stylesheet="container-fluid">
                {props.children}
            </Container>
        </nav>
    )
}

export default Navbar;