import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1>IP Address Tracker</h1>
        <input type='text' placeholder='Search for any IP address or domain'/>
        <button type='button'>search</button>
      </header>
    )
  }
}
