import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

const Divider = () => {
  return (
    <View style={styles.container} />
  )
}

export default Divider;

const styles = ScaledSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Colors.gray,
    marginLeft: '20@s',
  },
})