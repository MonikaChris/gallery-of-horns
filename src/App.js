import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {beastData : data}
  }
  
  render() {
    return (
      <Container className="App">
        <Header title={"Gallery of Horns"} />
        <Container id="main">
          <Main beastData={this.state.beastData}/>
        </Container>
        <Footer author={"Page by Monika Davies"} />
      </Container>
    );
  }
}

export default App;
