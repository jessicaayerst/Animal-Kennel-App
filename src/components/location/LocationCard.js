import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./build.png')} alt="Building" />
          </picture>
          <h3>Location: <span className="card-locationName">{this.props.locationProp.city}</span></h3>
          <p>{this.props.locationProp.address}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;
