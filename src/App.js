import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component() {
  render() {
  return (
    <div className="App">
      <Header title={"Gallery of Horns"} />
      <Main/>
      <Footer author={"Page by Monika Davies"} />
    </div>
  );
}
}

export default App;
