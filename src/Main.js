import React from "react";
import HornedBeast from './HornedBeast';

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast title={"Three Horned Chameleon"} pic={require("./assets/chameleon.jpg")} description={"So small, yet so majestic"}/>
                <HornedBeast title={"White Deer"} pic={require("./assets/whitedeer.jpg")} description={"Rarely spotted"}/>
            </>
        )
    }
}

export default Main;