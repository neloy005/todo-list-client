// import { Button } from 'bootstrap';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar id='navbar' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to='/home'><span className='website-name'>Todo-list 📝</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/list'>List</Nav.Link>
                        </Nav>
                        {
                            user ?
                                <Nav.Link onClick={handleSignOut} as={Link} to='/login'><Button variant="outline-success">Logout</Button></Nav.Link>
                                :
                                <Nav.Link as={Link} to='/login'><Button variant="outline-danger">Login</Button></Nav.Link>
                        }




                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;