import React from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import './App.css';
import CardInf from './components/CardInf';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <CardInf/>
      <MapView />
      </>
    );
  }
}

export default App;
