import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beastData : data,
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }
  
  render() {
    return (
      <Container className="App">
        <Header title={"Gallery of Horns"} />
        <Container id="main">
          <Main 
            beastData={this.state.beastData}
            openModal={this.openModal}
            />
        </Container>
        <SelectedBeast 
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          />
        <Footer author={"Page by Monika Davies"} />
      </Container>
    );
  }
}

export default App;
