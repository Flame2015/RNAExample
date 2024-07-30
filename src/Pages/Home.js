
import React, { useState,useContext } from "react";
import {Button, Text, View } from "react-native";
import AppContext from "../context/AppContext";
import { GenCounter, HOCGenCounter } from "../HOC/hocTest";

import JSClass from "../classes/JSClass";

const Home = (props) => {
    const {counter} = useContext(AppContext);
    const {name,age} = props?.route?.params ? props.route.params:{name:"",age:""};
    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Text style={{ fontSize: 30 }}>Name : {name ? name:""}</Text>
      <Text style={{ fontSize: 30 }}>Age : {age ? age:""}</Text> */}
      {/* <Text>Value of my counter : {counter}</Text> */}

      {/* <Text>==================Normal component Test================</Text>
     
      <GenCounter/>
      
      <Text>==================HOC component Test================</Text>

      <HOCGenCounter component = {GenCounter} value={100}/> */}

    </View>)
  }

export default Home;  