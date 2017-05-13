import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles';

class HandlingTouchesTutorial extends Component {
  // ~~~~ navigation options
  static navigationOptions = {
    title: 'HandlingTouches',
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    // ~~~~ binding `this` into function
    this._onPressButton = this._onPressButton.bind(this);
  }

  // ~~~~ when user press button, increase counter
  _onPressButton() {
    let count = this.state.counter + 1;
    this.setState({ counter: count });
  }

  render() {
    return (
      <View style={ [styles.container, styles.bgRed] }>

        {/* ~~~~ button ~~~~ */}
        <TouchableHighlight 
          onPress={ this._onPressButton }
          underlayColor={ '#00487d' }
          style={ styles.button }
        >
          <Text style={ styles.buttonText }>
            Press here
          </Text>
        </TouchableHighlight>

        {/* ~~~~ result ~~~~ */}
        <Text style={ styles.textLabel }>
          Total press:
        </Text>

        <Text style={ [styles.textRight, styles.textResult] }>
          { this.state.counter }
        </Text>

      </View>
    );
  }
}

module.exports = HandlingTouchesTutorial;
