import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./build.png')} alt="Building" />
          </picture>
          <h3>Location: <span className="card-locationName">{this.props.locationProp.city}</span></h3>
          <Link to={`/locations/${this.props.locationProp.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default LocationCard;
