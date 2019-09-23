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
          <button type="button" onClick={() => this.props.deleteLocation(this.props.locationProp.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;
