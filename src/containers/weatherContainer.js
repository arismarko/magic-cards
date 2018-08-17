import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions/search';
import { Listings } from '../components/listings/listings';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.key !== nextProps.match.params.key) {
      this.props.actions.searchForPeople(nextProps.match.params.key);
    }
  }

  printResults() {
    let peoples = this.context.store.getState().people;

    if (peoples.length > 0) {
      peoples = <Listings items={peoples} />
    }

    return peoples;
  }


  render() {
    return (
      <div className="margin-top-10">
        {this.printResults()}
      </div>
    );
  }
}

ResultsContainer.propTypes = {
  actions: PropTypes.object,
  people: PropTypes.array,
};

ResultsContainer.defaultProps = {
  actions: () => {},
  people: [],
};

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

ResultsContainer.contextTypes = {
  store: PropTypes.object,
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);