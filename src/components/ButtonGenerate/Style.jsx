import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    alignItems: 'center',
    gap: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  play: {
    backgroundColor: '#000',
    width: 60,
    height: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
