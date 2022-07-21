import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <Header title={"Gallery of Horns"} />
        <Container id="main">
          <Main />
        </Container>
        <Footer author={"Page by Monika Davies"} />
      </Container>
    );
  }
}

export default App;
