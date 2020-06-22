import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css';


export default class CustomNavbar extends Component {
    render() {
        return (
            // <Navbar default collapseOnSelect>
                 
            //     <Navbar.Brand>
            //         <Link to="/">Nazifa Sadia</Link>
            //     </Navbar.Brand>
            //     <Navbar.Toggle />
                
            //     <Navbar.Collapse>
            //     <Nav pullRight>
            //         <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            //         Home
            //         </NavItem>

            //         <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            //         About
            //         </NavItem>

            //         <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            //         News
            //         </NavItem>
            //     </Nav>
            //     </Navbar.Collapse> 
            // </Navbar>


        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="/">NAZIFA</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
            <br/>
        </div>



        // <Router>
        // <div>
        // <ul>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/contact">Contact</Link>
        //     <Link to="/portfolio">Portfolio</Link>
        // </ul>

        // <Route exact path="/" component={App}></Route>
        // <Route path="/about" component={About}></Route>
        // <Route path="/contact" component={Contact}></Route>
        // <Route path="/portfolio" component={Portfolio}></Route>
        // </div>
        // </Router>
        );
    }
}

// export default CustomNavbar;