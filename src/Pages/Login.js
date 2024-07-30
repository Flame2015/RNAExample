
import React, { useState,useContext } from "react";
import { Text, View, Button, TextInput } from "react-native";
import AppContext from "../context/AppContext";

const Login = (props) => {

    const {counter, setCounter} = useContext(AppContext);

    const [numb, setNumb]=useState(0);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Login Screen</Text>
        <Text>{props.uName}</Text>
        <TextInput value={numb} onChangeText={(val) => setNumb(val)} placeholder="Number" style={{ borderBottomWidth: 1, borderColor: "#000", width: 200, padding:10 }} />
        
        <TextInput value={name} onChangeText={(text) => setName(text)} placeholder="Name" style={{ borderBottomWidth: 1, borderColor: "#000", width: 200, padding:10 }} />
        <TextInput value={age} onChangeText={(text) => setAge(text)} placeholder="Age" style={{ borderBottomWidth: 1, borderColor: "#000", width: 200,padding:10 }} />
        <Button title="Go to Home Page"
            onPress={() => props.navigation.navigate("Home", { name, age })} />
         {/* <Button title="Go to Tab Nav"
            onPress={() => props.navigation.navigate("TabNav")} />
    */}
     <Button title="Save Context"
            onPress={() => setCounter(numb)} />

            <Button title="Move to Test Class" 
                onPress={() => props.navigation.navigate("TestClass")}/>
                
    </View>)
}


export default Login; 
