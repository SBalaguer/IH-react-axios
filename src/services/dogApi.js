import axios from 'axios';

const listAllBreeds = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then((result) => {
        //console.log(result.data.message);
        const allBreeds = Object.keys(result.data.message);
        //console.log(allBreeds);
        // this.setState({
        //   allBreeds
        // });
        resolve(allBreeds);
      })
      .catch((error) => reject(error));
  });
};

const fetchRandomImage = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((result) => {
        console.log(result);
        resolve(result.data.message);
      })
      .catch((error) => reject(error));
  });
};

export { listAllBreeds, fetchRandomImage };
