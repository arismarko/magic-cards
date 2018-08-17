import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavBar } from '../components/navbar/navbar.jsx';

import * as actions from '../actions/search.jsx';

class NavContainer extends Component {
  componentWillMount() {
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(url) {
    this.context.router.history.push(url);
  }

  render() {
    return (
      <div>
        <NavBar handleQueryChange={this.handleQueryChange} />
      </div>
    );
  }
}

NavContainer.propTypes = {
  actions: PropTypes.object,
  people: PropTypes.array,
};

NavContainer.defaultProps = {
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

NavContainer.contextTypes = {
  store: PropTypes.object,
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);