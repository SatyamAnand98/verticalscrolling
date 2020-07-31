import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button'
import {Card, CardGroup, CardColumns, CardDeck} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


let dat;

  fetch(`https://raw.githubusercontent.com/SatyamAnand98/data/master/db.json`)
  .then(res => res.json())
  .then(data => {
    dat=data;
    console.log(dat)
  })


function App() {

  const rendercard = (card, index) => {
    return(
      // <div class="col-3">
        //<div class="card card-block">
        <div className="cardsspacing">
          <Card border="primary" style={{ width: '25rem', height: '17rem' }}>
            <Card.Header>I8LABS QUOTES</Card.Header>
            <Card.Body>
            <Card.Title>Quote Number {index}</Card.Title>
              <br></br>
              <Card.Text className="scrolls">{card.quote}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      // </div>
    )
  }

  return (
    <div className="scrolld App">
      {/* <div class="container-fluid">
        <div class="row flex-row flex-nowrap"> */}
          {dat.map(rendercard)}
        </div>
    //   </div>
    // </div>
  );
}

export default App;