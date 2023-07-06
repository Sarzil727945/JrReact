import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar } from 'react-bootstrap';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Form, useNavigate } from 'react-router-dom';


const Header = () => {
     const { user, logOut } = useContext(AuthContext)
     
     const navigate = useNavigate();

     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4 d-flex align-items-center'>
                              <img className='logoStyle' src="https://img.freepik.com/free-vector/organic-supermarket-business-company-logo_23-2148462396.jpg?w=740&t=st=1688655450~exp=1688656050~hmac=b1451519d9529804b49ccbd7fa1564ac3ed17ec02c4029081067702be3565ffb" alt="" />
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0 fw-semibold"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                              </Nav>
                              <Form className="d-flex">
                                   {
                                        user ? <div>
                                             <img title={user.displayName} className='imgStyle me-3' src={user.photoURL} alt="" />
                                             <Button onClick={handelLogOut} variant="info" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   }
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;