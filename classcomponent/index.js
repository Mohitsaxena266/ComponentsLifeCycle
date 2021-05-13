import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import ChildComponents from './childComponent';
class ClassComoponent extends Component {
  constructor(props) {
    super(props); //initial state
    this.state = {
      myval: 'abc123',
    };
    console.log('constructor', this.state);
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', state);
    // if want to chnage state according to props
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount ');
    // on initial load
    //geolocation
    //fetch api
  }
  changeSomthing = (ev) => {
    // console.log('changeSomthing');
    this.setState({
      val: Date.now(),
    });
  };
  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');

    //on future loads
    //  watch out loops
    //this.setState() - be cautious about setState here
  }
  componentWillUnmount() {
    //component is leaving the screen

    console.log('componentWillUnmount'); // component is leaving screen
  }

  render() {
    console.log('render');
    return (
      <View>
        <Text>React Component Life Cycle</Text>
        <Button title="Change Something" onPress={this.changeSomthing} />
        {/* <Text>Class component {this.state.val}</Text> */}
        <ChildComponents childProps={this.state} />
      </View>
    );
  }
}
export default ClassComoponent;
