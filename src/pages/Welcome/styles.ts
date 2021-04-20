import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 32,
    marginTop: 38,
    lineHeight: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    paddingHorizontal: 20,
    color: colors.body_dark
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56
  },

  buttonText: {
    fontSize: 24,
    color: colors.white,
  }
});

export default styles;