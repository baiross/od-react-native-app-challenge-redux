import React from 'react';
import { Dimensions, View, Image, Text } from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { scale, ScaledSheet, verticalScale } from 'react-native-size-matters';

// types
import { Detail } from '../../types/galleryState';

// constants
import Colors from '../../../constants/Colors';
import { FEATURED_PHOTOS } from '../../../constants/Strings';

/**
 * Component for rendering a carousel of featured photos.
 * */
const FeaturedPhotos  = ({photos, details}) => {
  const progressValue = useSharedValue(0);
  const windowWidth = Dimensions.get('window').width;

  const getPhotoDetail = (id: string, key: string) => {
    // Filter the 'details' array based on the provided 'id'
    const photoDetail = details.filter((detail: Detail) => detail.id === id);
    
    // Return the value of the specified 'key' from the first matching photo detail
    return photoDetail[0][key];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{FEATURED_PHOTOS}</Text>
      <Carousel
        mode="parallax"
        loop
        width={windowWidth - scale(20)}
        height={verticalScale(200)}
        autoPlay={true}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxScrollingOffset: scale(55),
        }}
        data={photos}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        scrollAnimationDuration={3000}
        renderItem={({item, index}: {item: Detail, index: number}) => (
          <View
            style={[
              styles.imageContainer,
              {
                backgroundColor: 'transparent',
              },
            ]}>
            <Image
              source={{uri: item.src}}
              style={styles.image}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{getPhotoDetail(item.id, 'title')}</Text>
              <Text style={styles.author}>by {getPhotoDetail(item.id, 'author')}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default FeaturedPhotos;

const styles = ScaledSheet.create({
  container: {
    margin: '10@s',
  },
  label: {  
    fontSize: '20@s',
    color: Colors.tapShoe,
    letterSpacing: 0.8,
    marginTop: '10@vs',
    marginLeft: '10@s',
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '200@vs',
    borderRadius: '15@s',
  },
  detailsContainer: {
    position: 'absolute',
    bottom: '10@s',
    left: '10@s'
  },
  title: {
    fontSize: '23@s',
    color: Colors.white,
    fontWeight: 'bold'
  },
  author: {
    fontSize: '17@s',
    color: Colors.white,
    fontStyle: 'italic',
  }
});

