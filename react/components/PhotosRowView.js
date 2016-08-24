import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PostShape from '../shapes/postShape';

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'white',
  },
  postImage: {
    height: 200,
    // flex: 1,
  }
});

class PhotosView extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <View style={styles.rowContainer}>
        <Image
          style={styles.postImage}
          source={{uri: post.imageURL}}
          resizeMode="cover"
        />
        <Text
          numberOfLines={5}
        >
          {post.caption}
        </Text>
      </View>
    );
  }
}

PhotosView.propTypes = {
  post: PostShape.isRequired,
}

export default PhotosView;
