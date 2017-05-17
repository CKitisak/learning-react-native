import React, { Component } from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import styles from './styles'

class MyButton extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps({ style: nativeProps })
  }

  render() {
    return (
      <View ref={ component => this._root = component } { ...this.props }>
        <Text style={ styles.buttonText }>{ this.props.label }</Text>
      </View>
    )
  }
}

class DirectManipulationTutorial extends Component {
  // ~~~~ navigation options
  static navigationOptions = {
    title: 'DirectManipulation'
  }

  constructor(props) {
    super(props);
    this.state = { myButtonOpacity: 1, }
    this.clearText = this.clearText.bind(this)
    this.setOpacityTo = this.setOpacityTo.bind(this)
  }

  clearText() {
    this._textInput.setNativeProps({ text: '' })
  }

  setOpacityTo(value) {
    this.refs['myButtonRef'].setNativeProps({
      opacity: value
    })
  }

  render() {
    return (
      <View style={ [styles.container, styles.bgGray] }>
        <View style={ [styles.box, styles.bgBlue] }>
          <Text style={ styles.textLabel }>
            setNativeProps with TouchableOpacity
          </Text>
          <TouchableOpacity 
            onPress={ () => this.setState({ myButtonOpacity: 0.5 }) }
            onPressOut={ () => this.setState({ myButtonOpacity: 1 }) }
          >
            <View style={ [styles.button, styles.buttonRed, { opacity: this.state.myButtonOpacity }] }>
              <Text style={ styles.buttonText }>
                Press me!
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={ [styles.box, styles.bgBlue] }>
          <Text style={ styles.textLabel }>
            Composite components and setNativeProps
          </Text>
          <TouchableOpacity 
            style={ [styles.button, styles.buttonRed] } 
            onPress={ () => this.setOpacityTo(0.1) }
          >
            <MyButton label="Press me!" ref="myButtonRef" />
          </TouchableOpacity>
        </View>

        <View style={ [styles.box, styles.bgBlue] }>
          <Text style={ styles.textLabel }>
            setNativeProps to clear TextInput value
          </Text>
          <TextInput 
            ref={ component => this._textInput = component }
            style={ styles.textInput } 
          />
          <TouchableOpacity 
            onPress={ this.clearText } 
            style={ [styles.button, styles.buttonRed] }
          >
            <Text style={ styles.buttonText }>
              Clear text
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

module.exports = DirectManipulationTutorial;