import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Listings } from '../components/listings/listings';
import PropTypes from 'prop-types';

import * as actions from '../actions/cities.jsx';

class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      cities: [],
    };
  }

  componentWillMount() {
    this.props.actions.loadDefaultCities();
  }

  printResults() {
    let cities = this.context.store.getState().cities;
    
    if (cities.length > 0) {
      cities = <Listings items={cities} />
    }

    return cities;
  }

  render() {
    return (
      <div className="margin-top-10">
        {this.printResults()}
      </div>
    );
  }
}

CitiesContainer.propTypes = {
    actions: PropTypes.object,
    cities: PropTypes.array,
  };
  
CitiesContainer.defaultProps = {
    actions: () => {},
    cities: [],
};
  
const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
};
  
CitiesContainer.contextTypes = {
    store: PropTypes.object,
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);