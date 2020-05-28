import React, { Component } from 'react';

//import { listAllBreeds, fetchRandomImage } from './../../services/dogApi';
import * as dogService from './../../services/dogApi';
import RandomDog from './../../Components/RandomDog';

class AllDogs extends Component {
  constructor() {
    super();
    this.state = {
      allBreeds: ['chihuahua', 'Shih tzu']
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    dogService
      .listAllBreeds()
      .then((allBreeds) => this.setState({ allBreeds }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>List of all breeds:</h1>
        <RandomDog />
        <ul>
          {this.state.allBreeds.map((breed) => (
            <li key={Date.now() * Math.random()}>{breed}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllDogs;
