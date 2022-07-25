import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      showModal: false,
      displayBeast: {
        title: null,
        image_url: null,
        description: null
      }
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = (beastTitle, beastImage_url, beastDescription) => {
    this.setState({
      showModal: true,
      displayBeast: {
        title: beastTitle,
        image_url: beastImage_url,
        description: beastDescription
      }
    });
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
          beast={this.state.displayBeast}
        />
        <Footer author={"Page by Monika Davies"} />
      </Container>
    );
  }
}

export default App;
