/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { TouchableOpacity, Image, Text, View, Button } from "react-native";
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator, NavigationContainer } from "react-navigation";

export interface Props {
  navigation: any;
}
export interface State {}
export default class App extends Component<Props, State> {
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Login" onPress={() => this.props.navigation.navigate("Dashboard")} />
        <Button title="Sign Up" onPress={() => alert("button pressed")} />
      </View>
    );
  }
}

class DashboardScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
        <Button onPress={() => this.props.navigation.navigate("AddContent")} title="Add Content" />
      </View>
    );
  }
}
class AddContentScreen extends Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>AddContentScreen</Text>
      </View>
    );
  }
}

class Settings extends Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class Profile extends Component<Props, State> {
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
        headerRight: (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={{ width: 40, height: 40 }} source={require("./resources/hamburger_menu.png")} />
          </TouchableOpacity>
        )
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
