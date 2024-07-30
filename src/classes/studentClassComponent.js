import React,{Component} from 'react';
import {Text, View, TextInput} from 'react-native';

class StudentClass extends Component{

    render(){
        <View>
            <Text style={{fontSize : 30, color: 'Green'}}>
                 StudentClass Component
            </Text>
            <TextInput placeholder = "Student Enter your name" />
            <Button title="Press Me" />
        </View>
    }
}

export default StudentClass;