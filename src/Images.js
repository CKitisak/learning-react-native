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
              source={ require('./matt-helbig-237295.jpg') } 
              style={{ width: 200, height: 200 }} 
            />
          </View>

          <View style={ styles.row }>
            <Text style={ styles.textLabel }>
              Image from URL
            </Text>

            <Image 
              source={{ uri: 'https://unsplash.it/g/200/200?random', cache: 'reload' }}
              style={{ width: 200, height: 200 }} 
            />
          </View>

          <View style={ styles.row }>
            <Text style={ styles.textLabel }>
              Image as Background
            </Text>

            <Image 
              source={{ uri: 'https://unsplash.it/g/200/200?image=11', cache: 'reload' }}
              style={{ width: 200, height: 200 }} 
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