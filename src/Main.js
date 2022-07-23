import React from "react";
import HornedBeast from './HornedBeast';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Main extends React.Component {
    render() {
        return (
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {data.map(beast =>
                        <Col>
                            <HornedBeast
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        )
    }
}

export default Main;

