import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ChildComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps Child', props);
    console.log('getDerivedStateFromProps Child', state);

    // if want to chnage state according to props
    return {date: props.childProps.val};
  }
  render() {
    return (
      <View>
        <Text>This is a new Data{this.state.date}</Text>
      </View>
    );
  }
}
export default ChildComponents;
