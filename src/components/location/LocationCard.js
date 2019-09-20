import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./build.png')} alt="Building" />
          </picture>
          <h3>Location: <span className="card-locationName">Huntington</span></h3>
          <p>123 Main Street</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;