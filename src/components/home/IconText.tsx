import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';

// constants
import Colors from '../../../constants/Colors';

type IconTextProps = {
  iconName: string | any;
  text: string;
  size?: number;
  onPressIcon?: () => void;
}

// This Component can be reused to display an icon and its associated text.
const IconText: React.FC<IconTextProps> = ({ iconName, text, size = scale(20), onPressIcon }) => {
  return (
    <TouchableOpacity disabled={!onPressIcon} onPress={onPressIcon} style={styles.container}>
      <Ionicons name={iconName} color={Colors.tapShoe} size={size} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconText;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: '14@s',
    color: Colors.tapShoe,
    marginLeft: '5@s',
    marginRight: '15@s',
  },
});
