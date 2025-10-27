import React, { Component } from 'react';

import Navabar from './components/navabar';
import Card from './components/card'; 
import Summaryorder from './components/summaryorder';


import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state = {
    totalespesa : 0,
    totalepezzi : 0,
    cards: [
      {id: 0, nome: 'California', prezzo: 1.99, immagine: california, quantità: 0},  
      {id: 1, nome: 'Dragon', prezzo: 2.99, immagine: dragon, quantità: 0},  
      {id: 2, nome: 'Dynamite', prezzo: 3.99, immagine: dynamite, quantità: 0},  
      {id: 3, nome: 'Philadelphia', prezzo: 4.99, immagine: philadelphia, quantità: 0},  
      {id: 4, nome: 'Rainbow', prezzo: 5.99, immagine: rainbow, quantità: 0},  
      {id: 5, nome: 'Shrimp', prezzo: 6.99, immagine: shrimp, quantità: 0}
    ]
  };

  handleDelete = cardId => {
    const cards = [...this.state.cards];
    if (cards[cardId].quantità === 0) return;

    const totalepezzi = this.state.totalepezzi - cards[cardId].quantità;
    const totalespesa = this.state.totalespesa - cards[cardId].prezzo*cards[cardId].quantità;

    cards = this.state.cards.filter(card => card.id !== cardId);

    this.setState({ cards, totalepezzi, totalespesa });

  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;

    const totalepezzi = this.state.totalepezzi +1
    const totalespesa = this.state.totalespesa + cards[id].prezzo;
    this.setState({ cards, totalepezzi, totalespesa });
  }

  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card };
    cards[id].quantità = cards[id].quantità > 0 ? cards[id].quantità - 1 : cards[id].quantità; 
    
    const totalepezzi = this.state.totalepezzi > 0 ? this.state.totalepezzi -1 : this.state.totalepezzi; 
    const totalespesa = this.state.totalespesa > 0 ? this.state.totalespesa - cards[id].prezzo: this.state.totalespesa;
    
    this.setState({ cards, totalepezzi, totalespesa  });
  }

  render() {
    return (
    <>
      <Navabar />
      <div className="container ">
        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <Summaryorder totpezzi={this.state.totalepezzi} totspesa={this.state.totalespesa}/>
        <div className='row'>
          {
            this.state.cards.map((card) => (
              <Card 
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                card={card}
              />
            ))
          }
        </div>
      </div>  
    </>
    );
  }
}

export default App;
