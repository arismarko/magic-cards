import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Searchbar } from '../searchbar/searchbar.jsx';
import PropTypes from 'prop-types';

import './navbar.scss';

export class NavBar extends Component {
  handleSearch(event) {
    this.props.handleQueryChange(event);
  }

  render() {
    return (
      <nav id="nav" className="main-menu navbar flat">
        <div className="container">
          <div className="col-xs-12">
            <Searchbar
              placeholder="Search for a city"
              handleChange={(event) => {
                this.handleSearch(event);
              }}
            />
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  handleQueryChange: PropTypes.func.isRequired,
};

export default withRouter(NavBar);
