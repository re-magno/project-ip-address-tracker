import React from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <MapView />
      {/* <CardInf /> */}
      </>
    );
  }
}

export default App;
