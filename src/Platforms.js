import React, { Component } from 'react';
import {
  Image,
  Platform,
  Text,
  View
} from 'react-native';

import styles from './styles';

class PlatformsTutorial extends Component {
  static navigationOptions = {
    title: 'Platform',
  };

  render() {
    let osName = Platform.OS;
    let osColor = (Platform.OS === 'ios') ? '#cd5c5c' : '#6ab344';
    let osLogo = (Platform.OS === 'ios') 
      ? 'https://cdn0.iconfinder.com/data/icons/BrushedMetalIcons_meBaze/512/Apple-03.png' 
      : 'http://envyandroid.com/content/images/2015/03/android3.png';
    let labelStyle = {
      marginTop: 25
    };
    console.log(osLogo)
    return (
      <View style={ [styles.container, styles.bgBlack] }>
        <View style={ styles.row }>
          <Text style={ [styles.textLabel, labelStyle] }>
            Your OS is:
          </Text>

          <Text style={{
            color: osColor,
            fontSize: 50
          }}>
            { osName }
          </Text>

          <Image 
            source={{ uri: osLogo, cache: 'reload' }}
            style={{ width: 400, height: 400 }} 
          />
        </View>
      </View>
    );
  }
}

module.exports = PlatformsTutorial;