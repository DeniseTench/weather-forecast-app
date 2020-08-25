import React from 'react';
import moment from 'moment'; 
import PropTypes from 'prop-types';

class ForecastDetails extends React.Component {
render() {
    return (

    <div className="forecast-details">
    <span className='date'>{moment(this.props.forecast.date).format('ddd Do MMMM')}</span>
    <span className='maxTemp'>Max Temp: {this.props.forecast.max}</span>
    <span className='minTemp'>Min Temp: {this.props.forecast.min}</span>
    <span className='windSpeed'>Wind Speed: {this.props.forecast.wind.speed} mph </span>
    <span className='windDirection'>Wind Direction: {this.props.forecast.wind.direction}</span>
    <span className='humidity'>Humidity: {this.props.forecast.humidity}</span>
    </div>

    );
  }
}

ForecastDetails.propTypes = {
date: PropTypes.array.isRequired,
maxTemp: PropTypes.array.isRequired,
minTemp: PropTypes.array.isRequired,
windSpeed: PropTypes.array.isRequired,
windDirection: PropTypes.array.isRequired,
humidity: PropTypes.array.isRequired, 
}; 

export default ForecastDetails;
