import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default TabNav;