import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class TestClass extends React.Component{

    fruit = () => {
        console.log("fruit");
        // this.props.navigation.navigate("Student")
    }

    render(){
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontSize : 30, color: 'red'}}>
                Class Component
            </Text>
            <TextInput placeholder = "Enter your name" />
            <Button  title="Press Me" onPress={this.fruit} />
        </View>
    }
}

export default TestClass;

