import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.pic} alt="" height={400}/>
            <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;