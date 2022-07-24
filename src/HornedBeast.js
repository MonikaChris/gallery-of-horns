import React from "react";
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    };


    incrementFav = () => {
        this.setState((prevState) => ({
            favorites: prevState.favorites + 1
        }));
    }

    render() {
        return (
            <Card style={{ width: '18rem' }} id='card'>
                <Card.Body>
                    <Card.Title onClick={this.incrementFav}>
                        {this.props.title}
                    </Card.Title>
                    <Card.Img 
                        src={this.props.image_url} 
                        alt={this.props.description} 
                        style={{height: '20rem'}}
                        onClick={this.props.openModal}/>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>💕: {this.state.favorites}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;

