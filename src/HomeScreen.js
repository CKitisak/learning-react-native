import React, { Component } from 'react';
import {
  Button,
  View
} from 'react-native';

import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Tutorials'
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={ [styles.container, styles.bgGray] }>

        <Button
          title="Handling Touches"
          onPress={
            () => navigate('HandlingTouchesTutorial')
          }
        />

        <Button
          title="Animation"
          onPress={
            () => navigate('AnimationTutorial')
          }
        />

        <Button
          title="Images"
          onPress={
            () => navigate('ImagesTutorial')
          }
        />

        <Button
          title="Platforms"
          onPress={
            () => navigate('PlatformsTutorial')
          }
        />

        <Button
          title="DirectManipulation"
          onPress={
            () => navigate('DirectManipulationTutorial')
          }
        />
        

      </View>
    );
  }
}

module.exports = HomeScreen;