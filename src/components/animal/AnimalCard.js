import React, { Component } from 'react';
import './Animal.css'

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animalProp.name}</span></h3>
          <p>Breed: {this.props.animalProp.breed}</p>
          <p>Owner: {this.props.animalProp.owner.name}</p>
          <p>Location: {this.props.animalProp.location.city}</p>
          <p>Assigned To: {this.props.animalProp.employee.name}</p>
        </div>
      </div>
    );
  }
}

export default AnimalCard;