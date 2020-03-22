
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
    let { count } = this.props;
    this.props.dispatch(changeCount(count-1));
  }
  incrementCount = () => {
    let { count } = this.props;
    this.props.dispatch(changeCount(count+1));
  }
  render() {
    const { count } = this.props;
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
  count: state.count.count,
});

export default connect(mapStateToProps)(App)
