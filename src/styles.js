import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  bgRed: {
    backgroundColor: '#cd5c5c'
  },
  bgGray: {
    backgroundColor: '#ececec'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  bgBlack: {
    backgroundColor: '#171717'
  },
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  },
  textLabel: {
    color: '#fff',
    fontSize: 25
  },
  textResult: {
    color: '#fff',
    fontSize: 100,
    // marginTop: -20,
    zIndex: 1
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00487d',
    backgroundColor: '#0068B3',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
});

module.exports = styles;