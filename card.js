
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>

                    <div className="d-flex justify-content-center align-items-center gap-2 my-2">
                    <button
                        onClick={() => this.props.onIncrement(this.props.card)}
                        className="btn btn-primary"
                    >
                        Aggiungi
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.card)}
                        className="btn btn-primary"
                    >
                        Rimuovi
                    </button>
                    <span className="badge text-bg-light">
                        {this.props.card.quantità}
                    </span>
                    </div>

                    
                    <img src={this.props.card.immagine} className="card-img-top" alt="Sushi" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome} Roll</h5>
                        <p className="card-text">{this.props.card.prezzo}</p>
                        <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;