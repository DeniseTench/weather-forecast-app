import React from 'react';

const LocationDetails = props => <h1 className="location-details">{props.city}, {props.country}</h1>;

import PropTypes from 'prop-types';

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;