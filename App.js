
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Component } from 'react';
import { connect } from 'react-redux';
import { changeCount } from './actions/counts';
import { bindActionCreators } from 'redux';



class App extends Component {
  decrementCount = () => {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount = () => {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const { count } = this.props.count;
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View >
              <Button
                title="increment"
                onPress={this.incrementCount}
              />
              <Text>{count}</Text>

              <Button
                title="decrement"
                onPress={this.decrementCount}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

}
const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
