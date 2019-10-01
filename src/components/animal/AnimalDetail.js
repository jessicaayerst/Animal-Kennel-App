import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';


class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      owner: "",
      location: "",
      assignedTo: "",
      loadingStatus: true,
  }

  handleDelete = () => {
      console.log("this is props", this.props)
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}

  componentDidMount(){
    // console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId)
    .then((animal) => {
      console.log("this is animal", animal)
      if(animal.name === undefined){
        this.setState({
          name: undefined,
          breed: undefined,
          owner: undefined,
          location: undefined,
          assignedTo: undefined,
          loadingStatus: false
        });
      }
       else {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        owner: animal.owner.name,
        location: animal.location.city,
        assignedTo: animal.employee.name,
        loadingStatus: false
      })}
    });
    }



  render() {

    return this.state.name !== undefined ? (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <p>Owner: {this.state.owner}</p>
          <p>Location: {this.state.location}</p>
          <p>Assigned To: {this.state.assignedTo}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    ) : (
      <div>Animal is No Longer Available</div>
    )
  }
}

export default AnimalDetail;