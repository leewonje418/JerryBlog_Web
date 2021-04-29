import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Nav, Navbar, NavbarToggler } from 'reactstrap';

const AppNavbar = (): JSX.Element => {
    return (
        <Fragment>
            <Navbar color='dark' dark expand='lg' className='sticky-top'>
                <Container>
                    <Link to='/' className='text-white text-decoration-none'>
                        Jerry's Blog
                    </Link>
                    <NavbarToggler/>
                    <Collapse isOpen={true} navbar>
                        <Nav className='ml-auto d-flex justify-content-around' navbar>
                        {false ? <h1 className='text-white'>authLink</h1> : <h1 className='text-white'>guestLink</h1>}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default AppNavbar;