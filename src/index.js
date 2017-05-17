import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// ~~~~ Pages
import HomeScreen from './HomeScreen';
import HandlingTouchesTutorial from './HandlingTouches';
import AnimationTutorial from './Animation';
import ImagesTutorial from './Images';
import PlatformsTutorial from './Platforms';
import DirectManipulationTutorial from './DirectManipulation';

// ~~~~ Navigation
const app = StackNavigator({
  Home: { screen: HomeScreen },
  HandlingTouchesTutorial: { screen: HandlingTouchesTutorial },
  AnimationTutorial: { screen: AnimationTutorial },
  ImagesTutorial: { screen: ImagesTutorial },
  PlatformsTutorial: { screen: PlatformsTutorial },
  DirectManipulationTutorial: { screen: DirectManipulationTutorial }
});

module.exports = app;