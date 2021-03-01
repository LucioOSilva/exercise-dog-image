import React from 'react';
import PropTypes from 'prop-types';
import './DogCard.css';

class DogCard extends React.Component {
  render() { 
    const { dogUrl } = this.props
    return (
      <div className="dog-box-picture">
        <img className="dog-picture" src={dogUrl} alt="img a cute dog"/>
      </div>
    );
  }
}

DogCard.propTypes = { dogUrl: PropTypes.object}.isRequired;

export default DogCard;
