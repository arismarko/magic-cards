import React, { Component } from 'react';
import { Listing } from '../components/listing/listing.jsx';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/people.jsx';

class PersonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: [], people: [] };
    this.props.actions.loadAllPeople();
  }

  getSelectedItem(people, name) {
    const filmSelected = people.filter((person) => {
      return person.name.includes(name);
    });
    return filmSelected;
  }

  printSelectedPerson() {
    let selectedItem = this.getSelectedItem(this.props.people,
    this.props.match.params.name);


    if (selectedItem.length > 0) {
        selectedItem = <Listing selected={selectedItem[0]} />;
    }

    return selectedItem;
  }

  render() {
    return (
      <div>
        {this.printSelectedPerson()}
      </div>
    );
  }
}

PersonContainer.propTypes = {
   actions: PropTypes.object,
   people: PropTypes.array,
};
  
PersonContainer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
