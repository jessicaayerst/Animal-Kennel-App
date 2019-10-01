import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
          <Link to={`/owners/${this.props.ownerProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;