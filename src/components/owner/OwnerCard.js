import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./own.png')} alt="Owner Icon" />
          </picture>
          <h3>Name: <span className="card-ownerName">{this.props.ownerProp.name}</span></h3>
          <p>Phone: {this.props.ownerProp.phone}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.ownerProp.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;