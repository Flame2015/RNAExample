

import React, { useState } from "react";
import { Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopTabNav from "./src/Navigation/TopTabNav";
import TabNav from "./src/Navigation/TabNav";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Header from "./src/Pages/Header";

import TestClass from "./src/classes/TestClassComponent";
import StudentClass from "./src/classes/studentClassComponent";

import ErrorBoundary from "./src/errorBoundary";

import { AppProvider } from "./src/context/AppContext";

const Stack = createNativeStackNavigator();


const App = () => {

  const [uName, setUname] = useState("");
  const getData = (data) => {
    setUname(data);
  }
  const btnAction = () => {
    console.warn("Button pressed")
  }

  return (
    <AppProvider>
      <ErrorBoundary>
        <NavigationContainer>

          <Stack.Navigator initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: "blue"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontSize: 25,
              }
            }}
          >
            {/*      
      <Stack.Screen
        name="TopTabNav"
        component={TopTabNav}
        options={{headerShown: false}}/> */}
            {/* 
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}/> */}

            <Stack.Screen
              name="Login"
              component={Login}
              options={{

                headerLeft: (props) => <Button onPress={btnAction} title="Left" />,
                headerRight: (props) => <Header getData={getData} />,
                title: "User Login",
                headerStyle: {
                  backgroundColor: "#fff"
                },

              }}
            />

            <Stack.Screen name="Home" component={Home}
              options={{
                title: "User Name",
                headerRight: (props) => <Text style={{ color: "#fff", fontSize: 25 }}>{uName}</Text>,
              }}
            />

            <Stack.Screen name="TestClass" component={TestClass}
              options={{
                title: "TestClass",
                headerRight: (props) => <Text style={{ color: "#fff", fontSize: 25 }}>{"TestClass"}</Text>,
              }}
            />
            <Stack.Screen name="Student" component={StudentClass}
              options={{
                title: "Student Class",

              }} />

          </Stack.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </AppProvider>
  )
};





export default App;