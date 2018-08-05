import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy, stub, useFakeTimers } from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';
import Timer from '../src/Timer';

describe('<App />', () => {
  var appWrapper



});





describe('<Timer />', () => {
  var timerWrapper

  it('calls componentDidMount', () => {
    spy(Timer.prototype, 'componentDidMount');

    timerWrapper = shallow(<Timer />);

    //component mounted correctly
    expect(Timer.prototype.componentDidMount.calledOnce, "componentDidMount was not called").to.equal(true);
    timerWrapper.unmount()
  });


  it('calls componentWillUnmount', () => {
    spy(Timer.prototype, 'componentWillUnmount');
    timerWrapper = shallow(<Timer />);
    timerWrapper.unmount()
    expect(Timer.prototype.componentWillUnmount.calledOnce).to.equal(true);

  })

});
