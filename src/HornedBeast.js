import React from "react";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
        this.incrementFav = this.incrementFav.bind(this);
    };


    incrementFav = () => {
        this.setState((prevState) => ({
            favorites: prevState.favorites + 1
        }));
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img 
                    src={this.props.image_url} 
                    alt={this.props.description} 
                    height={400}
                    onClick={this.incrementFav}/>
                <p>{this.props.description}</p>
                <h3>💕: {this.state.favorites}</h3>
            </>
        )
    }
}

export default HornedBeast;

