import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {TabView, SceneMap} from 'react-native-tab-view';

import {addTodo} from 'actions/todo';
import {Colors} from 'assets/color';
import {Header} from './components';
import {CharacterStyles} from 'assets/character-styles';
import {Fonts} from 'assets/fonts';

const mapDispatchToProps = {
  addTodo,
};

const connector = connect(null, mapDispatchToProps);

type Props = {} & ConnectedProps<typeof connector>;

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: Colors.white}]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const Home = (props: Props): ReactElement => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabbar = () => {
    return (
      <View style={styles.tabbarContainer}>
        <TouchableOpacity onPress={(): void => setIndex(0)}>
          <Text
            style={[
              CharacterStyles.text,
              styles.tabbarTitle,
              index === 0 && styles.activeTabbar,
            ]}>
            Todo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(): void => setIndex(1)}>
          <Text
            style={[
              CharacterStyles.text,
              styles.tabbarTitle,
              index === 1 && styles.activeTabbar,
            ]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue1} />
      <SafeAreaView style={{backgroundColor: Colors.blue1, flex: 1}}>
        <View style={{flex: 1, backgroundColor: Colors.white}}>
          <Header title="My Todo" />
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabbar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabbarContainer: {
    backgroundColor: Colors.blue1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabbarTitle: {
    color: Colors.gray2,
    fontFamily: Fonts.MontserratSemiBold,
    paddingHorizontal: 32,
    paddingVertical: 4,
  },
  activeTabbar: {
    color: Colors.white,
  },
});

export default connector(Home);
