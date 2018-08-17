import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Searchbar } from './searchbar';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const spySetValue = sinon.spy();

// Props
const props = {
    handleChange: spySetValue,
    placeholder: "hello",
};

  // Context
const compGlobal = shallow(
    <Searchbar {...props} />
);

describe('<NavBar />', () => {
  it('component should render child', () => {
    expect(compGlobal.find('.searchcontainer')).to.have.length(1);
  });

  it('should call change with shallow', () => {
    compGlobal.instance().props.handleChange();
    expect(spySetValue.calledOnce).to.equal(true); //false
  });
});
