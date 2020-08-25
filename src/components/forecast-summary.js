import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
  return (
    <div>
    <div className="forecast-summary">{props.date}, {props.temperature}, {props.description}, {props.icon};</div>
    <div className="forecast-summary-date">{moment(props.date).format('ddd Do MMM')}</div>
    <div className="forecast-summary-icon"><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></div>
    </div>
  )
}

ForecastSummary.propTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  };

export default ForecastSummary;