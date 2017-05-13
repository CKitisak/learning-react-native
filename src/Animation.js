import React, { Component } from 'react';
import {
  Animated,
  Text,
  View
} from 'react-native';

import styles from './styles';

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // Initial value for opacity: 0
    };
  }
  
  componentDidMount() {
    Animated.timing(                            // Animate over time
      this.state.fadeAnim,                      // The animated value to drive
      {
        toValue: 1,                             // Animate to opacity: 1, or fully opaque
      }
    ).start();                                  // Starts the animation
  }

  render() {
    return (
      <Animated.View                            // Special animatable View
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



class AnimationTutorial extends Component {
  static navigationOptions = {
    title: 'Animation',
  };
  render() {
    return (
      <View style={ [styles.container, styles.bgRed] }>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      </View>
    );
  }
}

module.exports = AnimationTutorial;