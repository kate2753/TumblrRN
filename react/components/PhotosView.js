import React, {
  PropTypes,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { fetchPosts } from '../api/tumblrClient';
import PhotosRowView from './PhotosRowView';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#CCC',
  }
});

class PhotosView extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      loading: true,
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount() {
    fetchPosts().then((posts) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(posts),
        loading: false,
      })
    });
  }
  renderRow(post) {
    const { navigator } = this.props;

    return (
      <TouchableOpacity onPress={() => navigator.push({
        title: 'Details',
        post: post,
      })}>
        <PhotosRowView post={post} />
      </TouchableOpacity>
    );
  }
  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

PhotosView.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default PhotosView;
