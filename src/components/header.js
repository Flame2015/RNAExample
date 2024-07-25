/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */


import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import {ExampleContext,ExampleProvider} from '../exampleMain';
export const Header = () => {

    const data = useContext(ExampleContext);
    return(
        <View>
            <ExampleProvider children={<Text>ddsdsdsdd</Text>}>
            <Text style={{fontSize:30, textAlign:"right", backgroundColor:"#E6FF33", padding:5}}>
                Cart Count : 0
                </Text>
                </ExampleProvider>
                <Text>Hello I am from Header, {data.username}</Text>

        </View>
    );
};
