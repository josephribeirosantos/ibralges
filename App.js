import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { StyleSheet, Text, View, Animated, Image } from 'react-native';
import MaskedView from '@react-native-community/masked-view';

export default class App extends React.Component {
  state = {
    loadingProgress: new Animated.Value(0),
    AnimationDone: false
  }

  componentDidMount() {
    Animated.timing(this.state.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400
    }).start(() => {
      this.setState({ AnimationDone: true });
    });
  }

  render() {
    const colorLayer = this.state.AnimationDone ? null : (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#060606" }]} />
    );

    const whiteLayer = this.state.AnimationDone ? null : (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#F0F0F0" }]} />
    );

    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 15, 100],
            outputRange: [0.1, 0.06, 16]
          })
        }
      ]
    };

    const opacity = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 25, 50],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })
    }

    return (
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          {colorLayer}

          <MaskedView
            style={{ flex: 1 }}
            maskElement={
              <View style={styles.centered}>
                <Animated.Image
                  source={require('./assets/images/logo-icon.png')}
                  style={[{ width: 1000 }, imageScale]}
                  resizeMode="contain"
                />
              </View>
            }
          >
            {whiteLayer}

            <Routes />
          </MaskedView >
        </View >
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  }
});