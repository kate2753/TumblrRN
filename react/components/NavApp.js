import React from 'react';
import {
  Navigator,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import PostsView from './PhotosView';
import PhotoDetailsComponent from './PhotoDetailsComponent';

const styles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '#CCC',
    flexDirection: 'row',
  },
  navBarItem: {
    justifyContent: 'center',
    flex: 1,
  },
  navBarText: {
    color: '#333',
    marginLeft: 10,
  },
  navBarTitleText: {
    fontWeight: 'bold',
    marginLeft: 0,
  },
});

const initialRoute = {
  id: 'postsView',
  title: 'Humans of New York',
}

const routeMapper = {
  LeftButton: (route, navigator) => {
    if (navigator.getCurrentRoutes().length > 1) {
      return (
        <TouchableOpacity onPress={navigator.pop} style={styles.navBarItem}>
          <Text style={styles.navBarText}>{'<'} Back</Text>
        </TouchableOpacity>
      );
    }
  },
  RightButton: () => null,
  Title: route => (
    <View style={styles.navBarItem}>
      <Text style={[styles.navBarText, styles.navBarTitleText]}>{route.title}</Text>
    </View>
  ),
};

class NavApp extends React.Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    if(route.id === initialRoute.id) {
      return <PostsView navigator={navigator} />;
    }

    return (
      <PhotoDetailsComponent post={route.post} />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
              routeMapper={routeMapper}
              style={styles.navBar}
            />
        }
      />
    );
  }
}

export default NavApp;
