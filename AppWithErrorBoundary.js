/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar,StatusBarStyle } from "react-native";
import { BooksDetails } from "./src/components/book";
import { Header } from "./src/components/header";
import CustomStatusBar from "./src/customUI/customStatusBar";
import {Greet} from './src/exampleMain';
import ErrorBoundary from './src/errorBoundary';


 const App = () => {

  StatusBar.setHidden(false);
  const [color,setColor] = useState('#E6FF33');

  var bookArray = [
    {
      name:"a book",
      price: 2000,
    },
    {
      name:"b book",
      price: 1000,
    },
    {
      name:"c book",
      price: 500,
    }

  ]

  return(    

    <ErrorBoundary>
         <CustomStatusBar statusBgColor={color}>
          <Greet/>
                <View>
                  <Header/>
                </View>
           
               <View>
                 {bookArray.map((item,key)=> <BooksDetails key={key} item={item}/>)}
               </View>
         </CustomStatusBar> 
    </ErrorBoundary>
  

        );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default App;