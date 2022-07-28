import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import HornFilter from './HornFilter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalBeast: {},
      beastsToDisplay: beastData
      }
    }
  

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = (beastTitle) => {
    const modalPic = beastData.find(beast => beast.title === beastTitle);
    
    this.setState({
      showModal: true,
      modalBeast: modalPic
    });
  }

  numHorns = (horns) => {
    if (horns !== 'all') {
      const numHorns = beastData.filter(beast => beast.horns === Number(horns));
      this.setState({ beastsToDisplay : numHorns});
    }

    else this.setState({beastsToDisplay : beastData});
  }

  render() {
    return (
      <Container className="App">
        <Header title={"Gallery of Horns"} />
        <HornFilter numHorns={this.numHorns} />
        <Main
          beastData={this.state.beastsToDisplay}
          openModal={this.openModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          beast={this.state.modalBeast}
        />
        <Footer author={"Page by Monika Davies"} />
      </Container>
    )
    }  
}

export default App;
