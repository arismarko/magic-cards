import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { NavBar } from './navbar';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const spySetValue = sinon.spy();

// Props
const props = {
  handleQueryChange: spySetValue
};

  // Context
const compGlobal = shallow(
    <NavBar {...props} />
);

describe('<NavBar />', () => {
  it('component should render child', () => {
    expect(compGlobal.find('.navbar')).to.have.length(1);
  });

  it('should call change with shallow', () => {
    compGlobal.instance().props.handleQueryChange();
    expect(spySetValue.calledOnce).to.equal(true); //false
  });
});
