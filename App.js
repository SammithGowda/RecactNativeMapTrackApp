import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/accountScreen";
import SigninScreen from "./src/screens/signinScreen";
import SignupScreen from "./src/screens/signupScreen";
import TrackCreateScreen from "./src/screens/trackCreateScreen";
import TrackDeatilsScreen from "./src/screens/trackDetailsScreen";
import TrackListScreen from "./src/screens/trackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDeatilsScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

export default createAppContainer(switchNavigator)