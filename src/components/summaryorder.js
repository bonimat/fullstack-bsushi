import React, { Component } from 'react';

class Summaryorder extends Component {
    render() {
        return (
        <div className="d-flex justify-content-center align-items-center gap-4 my-1">
            <p>Riepilogo ordine: </p>
            <p>totole pezzi <span className="badge text-bg-dark">{this.props.totpezzi}</span></p>
            <p>totale spesa <span className="badge text-bg-dark">€ {this.props.totspesa}</span></p>                
        </div>
        );
    }
}

export default Summaryorder;