/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator, NavigationContainer } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Login" onPress={() => this.props.navigation.navigate("Dashboard")} />
        <Button title="Sign Up" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
        <Button onPress={() => this.props.navigation.navigate("AddContent")} title="Add Content" />
      </View>
    );
  }
}
class AddContentScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>AddContentScreen</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const DashboardStackNavigator: NavigationContainer = createStackNavigator(
  {
    Home: DashboardScreen,
    AddContent: AddContentScreen,
    Profile: Profile,
    Settings: Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: <Button title="MENU" onPress={() => navigation.openDrawer()} />
      };
    }
  }
);
const AppDrawerNavigator: NavigationContainer = createDrawerNavigator(
  {
    Home: {
      screen: DashboardStackNavigator
    },
    Profile: {
      screen: Profile
    },
    Settings: {
      screen: Settings
    }
  },
  {
    drawerPosition: "right"
  }
);

const AppSwitchNavigator: NavigationContainer = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer: NavigationContainer = createAppContainer(AppSwitchNavigator);
