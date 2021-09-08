import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentification/authentification.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
NavigationContainer;

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
