import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {

        return (
            <div>
                <Container>
                    <Jumbotron>
                        <h1>Hello! I am Nazifa</h1>
                        <h2>Welcome to my Website</h2>
                        <p>This website is built with React, React-Router & React-Bootstrap</p>
                        <Link to="/about" >
                            <Button bsStyle="primary">Learn More</Button>
                        </Link>
                    </Jumbotron>

                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
                            <h3>Frank</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>

                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
                            <h3>Cristina</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                        
                        <Col xs={12} sm={4} className="person-wrapper">
                            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
                            <h3>Ronald</h3>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;