import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link, Route,useHistory} from 'react-router-dom';

function Header()
{
  let history = useHistory();

  let user = JSON.parse(localStorage.getItem('user-info'));
 
 function logOut()
 {
  localStorage.clear();
  history.push('/register');

 }

	return(
		<div>
		    <Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
    <Nav className="me-auto navbar_warapper">
      {
        localStorage.getItem('user-info') ?
        <>
         <Link to="/list" >Product List</Link>
         <Link to="/add" >Add Product</Link>
         
         <Link to="/search" >Search Product</Link>
         <Link to="/markingimg" >Marking Image</Link>

         </>
         :
         <>
         <Link to="/login" >Login</Link>
         <Link to="/register" >Register</Link>
         </>
      }
    </Nav>
    {
      localStorage.getItem('user-info') ?

      <Nav>
   <NavDropdown title={user && user.name}>
      <NavDropdown.Item onClick={logOut}>
      Logout
      </NavDropdown.Item>
   </NavDropdown>
   </Nav>
   : null

    }
   
  </Navbar>
		</div>
	)
}
export default Header;