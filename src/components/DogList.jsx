import React from 'react';
import DogCard from './DogCard';
import './DogList.css';

const initialDogState = {
  dogUrl: undefined,
  loading: true,
}

class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialDogState;
    this.fetchDogUrl = this.fetchDogUrl.bind(this);
    this.renderDogElement = this.renderDogElement.bind(this);
  }

  async fetchDogUrl() {
    this.setState(
      {loading: true},
      async () => {
        const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
        const requestObject = await requestReturn.json();
        this.setState( {
          dogUrl: requestObject,
          loading: false
        });
      }
    )
  }

  componentDidMount() {
    this.fetchDogUrl();
  }

  renderDogElement(dogUrl) {
    const { message } = dogUrl;
    return <DogCard dogUrl={message} />; 
  }

  loadingElement() {
    return (
      <div className="dog-loading">
        Loading...
      </div>
    );
  }
  
  render() {
    const { dogUrl, loading } = this.state;
    return (
      <div>
        {loading ? this.loadingElement() : this.renderDogElement(dogUrl)}
        <button onClick={this.fetchDogUrl}>NovoDog</button>
      </div>
    );
  }
}


export default DogList;
