import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '800',
  },
  box: {
    backgroundColor: 'red',
    width: width / 2,
    height: 30/3,
    position: 'absolute',
    borderRadius: 50
  }
});
