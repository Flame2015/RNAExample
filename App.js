

import React, { useState } from "react";
import { Button, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopTabNav from "./src/Navigation/TopTabNav";
import TabNav from "./src/Navigation/TabNav";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login"; 
import Header from "./src/Pages/Header";

import { AppProvider } from "./src/context/AppContext";

const Stack = createNativeStackNavigator();


const App = () => {
 
const [uName,setUname] = useState("");
  const getData= (data)=>{
    setUname(data);
  }
  const btnAction=()=>{
    console.warn("Button pressed")
  }

  return (
  <AppProvider>
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
         
          headerLeft:(props)=><Button onPress={btnAction} title="Left"/>,
          headerRight:(props) =><Header  getData={getData}/>,
          title: "User Login",
          headerStyle: {
            backgroundColor: "#fff"
          },
          
        }}
      />

      <Stack.Screen name="Home" component={Home}
           options={{
            title: "User Name",
            headerRight:(props) =><Text style={{color:"#fff", fontSize:25}}>{uName}</Text>,
          }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  </AppProvider>
  )
};





export default App;