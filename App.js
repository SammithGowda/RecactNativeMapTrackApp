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
import { Provider as AuthProvider } from "./src/context/authContext"
import { setNavigation } from "./src/navigationRoute";
import { Provider as LocationProvider } from "./src/context/locationContext"
import ResolveAuth from "./src/screens/resolveAuth";
import { Provider as TrackProvider } from "./src/context/trackContext"
const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuth,
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

// export default createAppContainer(switchNavigator)
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigation) => { setNavigation(navigation) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}