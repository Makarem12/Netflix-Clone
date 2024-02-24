import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbar1(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Netfix Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">Fav List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbar1;