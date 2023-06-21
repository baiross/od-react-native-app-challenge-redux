import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
// constants
import Colors from '../../constants/Colors';
import { REPLIES } from '../../constants/Strings';

// utils
import { _formatDate } from '../../utils/formatter';

// custom components
import Divider from '../components/UI/divider';

// types
import { CommentData, Comments } from '../types/galleryState';
import { RootState } from '../types/rootState';

type CommentScreenProps = {
  route: any;
};

// CommentScreen component
const CommentScreen: React.FC<CommentScreenProps> = ({ route }) => {
  const {id} = route.params;
  const {comments} = useSelector((state: RootState) => state.gallery);

  // Filter the 'comments' array based on the provided 'id'
  const comment = comments.filter((commentDetail: Comments) => commentDetail.id === id);
  const commentData = comment[0].comments;

  const renderItem = ({ item }: { item: CommentData }) => {
    return (
      <View style={styles.commentItemContainer}>
        <Image source={{ uri: item.profileImg }} style={styles.profileImage} />
        <View style={styles.commentInfoContainer}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.commentText}>{item.comment}</Text>
          <Text style={styles.date}>{_formatDate(item.date)}</Text>
          <Text style={styles.replies}>{`${item.replies} ${REPLIES}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commentData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default CommentScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '15@s',
    backgroundColor: Colors.white,
  },
  commentItemContainer: {
    flexDirection: 'row',
    marginVertical: '10@s',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentInfoContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentText: {
    marginBottom: 4,
  },
  date: {
    color: 'gray',
    marginBottom: 4,
  },
  replies: {
    color: 'gray',
  },
});
