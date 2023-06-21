import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { PROFILE_GALLERY } from '../../constants/Strings';
import { GalleryListItem } from '../components/home';
import Divider from '../components/UI/divider';
import { Detail } from '../types/galleryState';
import { RootState } from '../types/rootState';

// AuthorsProfileScreen Component
const AuthorProfileScreen = ({ route }) => {
  const { authorName } = route.params;
  const {details} = useSelector((state: RootState) => state.gallery);
  const navigation = useNavigation();

  // Filter the 'details' array based on the provided 'id'
  const galleryDetail = details.filter((detail: Detail) => detail.author === authorName);

  useEffect(() => {
    // Set the navigation title
    navigation.setOptions({
      title: authorName
    });
  }, [authorName, navigation]);

  const renderItem = ({item}: {item: Detail}) => {
    return (<GalleryListItem item={item} hideAuthorName={true} />)
  };

  return (
    <View style={styles.container}>
      {/* FlatList to display the gallery details */}
      <FlatList
        initialNumToRender={5}
        data={galleryDetail}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <Text style={styles.header}>{PROFILE_GALLERY}</Text>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default AuthorProfileScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginBottom: '10@vs',
    backgroundColor: Colors.white,
  },
  header: {
    fontSize: '20@s',
    color: Colors.tapShoe,
    letterSpacing: 0.8,
    marginTop: '10@vs',
    marginLeft: '10@s',
    fontWeight: 'bold',
  },
});

