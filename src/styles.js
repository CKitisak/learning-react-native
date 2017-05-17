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
  box: {
    padding: 15,
    marginBottom: 15
  },
  bgRed: {
    backgroundColor: '#d62d20'
  },
  bgGreen: {
    backgroundColor: '#008744'
  },
  bgBlue: {
    backgroundColor: '#0057e7'
  },
  bgYellow: {
    backgroundColor: '#ffa700'
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
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  buttonRed: {
    borderColor: '#951f16',
    backgroundColor: '#d62d20',
  },
  buttonGreen: {
    borderColor: '#005e2f',
    backgroundColor: '#008744',
  },
  buttonBlue: {
    borderColor: '#0045b8',
    backgroundColor: '#0057e7',
  },
  buttonYellow: {
    borderColor: '#b27400',
    backgroundColor: '#ffa700',
  }
});

module.exports = styles;