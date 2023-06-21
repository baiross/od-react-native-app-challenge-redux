import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

// constants
import Colors from '../../constants/Colors';
// actions
import { fetchData } from '../store/galleryActions';

// types
import { RootState } from '../types/rootState';
import { Detail } from '../types/galleryState';

// custom components
import { GalleryListItem, FeaturedPhotos } from '../components/home';
import Divider from '../components/UI/divider';

// Home screen component
const HomeScreen = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state: RootState) => state.gallery);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderItem = ({item}: {item: Detail}) => {
    return (<GalleryListItem item={item} />)
  };

  return (
    <View style={styles.container}>
      {/* FlatList to display the gallery items */}
      <FlatList
        initialNumToRender={5}
        data={gallery.details}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <FeaturedPhotos photos={gallery.photos} details={gallery.details} />
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  )
}

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
