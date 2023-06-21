import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../types/rootState';
import { scale, ScaledSheet } from 'react-native-size-matters';
import Divider from '../components/UI/divider';
import Colors from '../../constants/Colors';
import { navigate } from '../services/navigationService';
import { AUTHORS_PROFILE_SCREEN } from '../routes/app.routes';

// AuthorsScreen component
const AuthorsScreen = () => {
  const {details} = useSelector((state: RootState) => state.gallery);
  const authorNames = [...new Set(details.map(item => item.author))];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigate(AUTHORS_PROFILE_SCREEN, {authorName: item})} style={styles.itemContainer}>
        <Text style={styles.author}>{item}</Text>
        <Ionicons name="chevron-forward" size={scale(24)} color={Colors.tapShoe} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* FlatList to display the author names */}
      <FlatList
        data={authorNames}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '8@vs',
  },
  author: {
    fontSize: '15@s',
    letterSpacing: 0.7,
  },
});

export default AuthorsScreen;
