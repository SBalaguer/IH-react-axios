import React, { Component } from 'react';
import { fetchRandomImage } from './../../services/dogApi';

class RandomDog extends Component {
  constructor() {
    super();
    this.state = {
      randomImage: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetchRandomImage()
      .then((result) => this.setState({ randomImage: result }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.fetchData()}>
          <img src={this.state.randomImage} alt="Beautiful Dog" />
        </button>
      </div>
    );
  }
}

export default RandomDog;
