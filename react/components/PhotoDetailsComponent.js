import React from 'react';
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import PostShape from '../shapes/postShape';

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: 'white',
  },
  postImage: {
    height: 400,
  }
});

class PhotoDetailsComponent extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.postImage}
          source={{uri: post.imageURL}}
          resizeMode="cover"
        />
        <Text>
          {post.caption}
        </Text>
      </ScrollView>
    );
  }
}

PhotoDetailsComponent.propTypes = {
  post: PostShape.isRequired,
};

export default PhotoDetailsComponent;
