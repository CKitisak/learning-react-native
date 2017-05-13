import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import styles from './styles';

class ImagesTutorial extends Component {
  static navigationOptions = {
    title: 'Images',
  };
  
  render() {
    return (
      <ScrollView>
        <View style={ [styles.container, styles.bgRed] }>
          <View style={ styles.row }>
            <Text style={ styles.textLabel }>
              Image from Static Resources
            </Text>
            
            <Image 
              source={ require('./wonder_woman.jpg') } 
              style={{ width: 300, height: 400 }} 
            />
          </View>

          <View style={ styles.row }>
            <Text style={ styles.textLabel }>
              Image from URL
            </Text>

            <Image 
              source={{ uri: 'https://unsplash.it/300/400?random', cache: 'reload' }}
              style={{ width: 300, height: 400 }} 
            />
          </View>

          <View style={ styles.row }>
            <Text style={ styles.textLabel }>
              Image as Background
            </Text>

            <Image 
              source={{ uri: 'https://unsplash.it/300/400?image=74', cache: 'reload' }}
              style={{ width: 300, height: 400 }} 
            >
              <Text style={ styles.textCenter }>
                Some text here
              </Text>
            </Image>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = ImagesTutorial;