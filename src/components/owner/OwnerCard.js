import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./own.png')} alt="Owner Icon" />
          </picture>
          <h3>Owner: <span className="card-ownerName">Jill Space</span></h3>
          <p>Email: jill123@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;