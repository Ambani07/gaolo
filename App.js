import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentification/authentification.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvIc6N0JSppzas9m-D1-IYWjWMzj806AE",
  authDomain: "gaolo-71cab.firebaseapp.com",
  projectId: "gaolo-71cab",
  storageBucket: "gaolo-71cab.appspot.com",
  messagingSenderId: "231413466374",
  appId: "1:231413466374:web:b6ff886e033cacf6648a87",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
