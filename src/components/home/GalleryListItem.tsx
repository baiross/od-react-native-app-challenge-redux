import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';
import { scale, ScaledSheet } from 'react-native-size-matters';

// custom component
import IconText from './IconText';

// types
import { Detail } from '../../types/galleryState';

// constants
import Colors from '../../../constants/Colors';
import { COMMENTS, LIKES } from '../../../constants/Strings';
import { navigate } from '../../services/navigationService';
import { COMMENT_SCREEN, GALLERY_DETAIL_SCREEN } from '../../routes/app.routes';

type FeedListItemProp = {
  item: Detail,
  hideAuthorName?: boolean
}

// Component for rendering a Feed List Item
const FeedListItem: React.FC<FeedListItemProp> = ({ item, hideAuthorName = false }) => {
  let videoId = ''
  // Extract videoId from the Vimeo URL
  if (item.type === 'video') {
    const url = item.src;
    videoId = url.split("/video/")[1];
  }

  const handlePress = () => {
    navigate(GALLERY_DETAIL_SCREEN, {detail: item})
  };

  return (
    <View style={styles.container}>
      {!hideAuthorName && (<Text style={styles.author}>{item.author}</Text>)}
      <Text style={styles.date}>{item.date}</Text>
      <IconText iconName={'ios-location-sharp'} text={item.location} />
    
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        {/* Render image or Vimeo video based on the item type */}
        {item.type === 'photo' ? (
          <Image
            source={{ uri: item.src }}
            style={styles.mediaContainer}
          />
        ) : (
          <Vimeo
            contentMode={'recommended'}
            allowsInlineMediaPlayback={true}
            videoId={videoId}
            params={`transparent=false`}
            style={styles.mediaContainer}
          />
        )}
      </TouchableOpacity>

      {/* Render like and comment icons with counts */}
      <View style={styles.statsContainer}>
        <IconText iconName={'ios-heart-outline'} text={`${item.likes} ${LIKES}`} size={scale(25)} />
        <IconText
          iconName={'ios-chatbox-outline'}
          text={`${item.comments} ${COMMENTS}`}
          size={scale(25)}
          onPressIcon={() => navigate(COMMENT_SCREEN, {id: item.id})}
        />
      </View>
    </View>
  );
};

export default FeedListItem;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@vs',
    marginBottom: '10@vs',
  },
  author: {
    fontSize: '14@s',
    letterSpacing: 0.7,
    fontWeight: 'bold',
  },
  date: {
    fontSize: '12@s',
    color: Colors.tapShoe,
    marginVertical: '3@vs',
    fontStyle: 'italic',
  },
  mediaContainer: {
    width: '100%',
    height: '200@s',
    borderRadius: '15@s',
    marginVertical: '10@s',
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
