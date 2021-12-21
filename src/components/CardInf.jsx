import React, { Component } from 'react'

export default class CardInf extends Component {
  render() {
    return (
      <ul>
        <li>
          <div>
            <h5> IP ADDRESS</h5>
            <p>192.212.174.100</p>
          </div>
        </li>
        <li>
          <div>
            <h5> LOCATION</h5>
            <p>Brooklyn, NY<br />10001</p>
          </div>
        </li>
        <li>
          <div>
            <h5>TIMEZONE</h5>
            <p>UCT -05:00</p>
          </div>
        </li>
        <li>
          <div>
            <h5>ISP</h5>
            <p>SpaceX<br />Starlink</p>
          </div>
        </li>
      </ ul >
    )
  }
}
