

import React, { useState } from "react";
import {TextInput } from "react-native";


const Header=(props)=>{

    const [userName, setuserName] = useState("")

    const onHandleTextChange = (text) => {
        setuserName(text);
        props.getData(text);
    }

    return(
    < TextInput 
        onChangeText={text => onHandleTextChange(text)}
        value={userName}
        placeholder="User Name" 
        style={{borderBottomWidth:1, borderColor:"#000", width:100}}/>);
  }
  

export default Header;  