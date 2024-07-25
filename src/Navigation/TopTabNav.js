import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from "../Pages/Login";
import Home from "../Pages/Home";

const TopTab = createMaterialTopTabNavigator();

const TopTabNav=()=> {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Login" component={Login} />
      <TopTab.Screen name="Home" component={Home} />
    </TopTab.Navigator>
  );
}

export default TopTabNav;