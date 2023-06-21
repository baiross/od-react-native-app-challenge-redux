import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Vimeo } from 'react-native-vimeo-iframe';

// constants
import Colors from '../../constants/Colors';
import { AUTHOR, COMMENTS, DATE, LIKES, LOCATION, TITLE } from '../../constants/Strings';

const GalleryDetailScreen = ({ route }) => {
  const { detail } = route.params;

  let videoId = ''
  // Extract videoId from the Vimeo URL
  if (detail.type === 'video') {
    const url = detail.src;
    videoId = url.split("/video/")[1];
  }

  const renderLabel = (label: string, value: string) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.mediaContainer}>
        {detail.type === 'photo' ? (
          <Image source={{ uri: detail.src }} style={styles.mediaContainer} />
        ) : (
          <Vimeo
            contentMode={'recommended'}
            allowsInlineMediaPlayback={true}
            videoId={videoId}
            params={`transparent=false`}
            style={styles.mediaContainer}
          />
        )}
      </View>
      {renderLabel(TITLE, detail.title)}
      {renderLabel(AUTHOR, detail.author)}
      {renderLabel(LOCATION, detail.location)}
      {renderLabel(DATE, detail.date)}
      {renderLabel(LIKES, detail.likes)}
      {renderLabel(COMMENTS, detail.comments)}
    </View>
  );
};

export default GalleryDetailScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@vs',
    marginBottom: '10@vs',
  },
  labelContainer: {
    marginTop: '10@s',
  },
  label: {
    fontSize: '14@s',
    letterSpacing: 1,
    color: Colors.black,
    fontStyle: 'italic',
    fontWeight: 'bold',

  },
  value: {
    fontSize: '15@s',
    letterSpacing: 1,
    color: Colors.tapShoe,
    marginLeft: '10@s',
  },
  mediaContainer: {
    width: '100%',
    height: '200@s',
    borderRadius: '15@s',
    marginVertical: '10@s',
  },
});

