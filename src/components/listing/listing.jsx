import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="main-banner selected">
          <div className="container">
            <h1 className="text-light text-center-sm text-center-xs">
              {this.props.selected.name}
            </h1>
          </div>
        </div>
        <div className="main-container container">
          <section className="intro-about-section text-center-xs">
            <div className="row">
              <div className="col-sm-7 col-xs-12">
                <h2 className="text-normal">{this.props.selected.name}</h2>
                <span
                  dangerouslySetInnerHTML={{ __html: this.props.selected.birth_year }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

Listing.propTypes = {
  selected: PropTypes.object,
};

export default Listing;
