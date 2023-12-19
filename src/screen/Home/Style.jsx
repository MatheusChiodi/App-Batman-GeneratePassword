import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  copy: {
    width: 300,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 18,
  },
});

export default styles;
