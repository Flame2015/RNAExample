/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, {useContext} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import GlobalInfo from '../../App';

export const BooksDetails = (props) => {
 
  // const appcolor = useContext(GlobalInfo);
  // console.log("appcolor",appcolor);
  const item = props.item;
  return(
    <View style={styles.addtocartbox}>
    <Text style={{fontSize:20}}>{"Book Name : " + item.name}</Text>
    <Text style={{fontSize:20}}>{"Price : " + item.price}</Text>
    <View style={styles.cartbutton}>
      <Button color="#fff" title="add to cart"/>
    </View>
</View>
            
        );
    
};


const styles = StyleSheet.create({
    container:{
        // flex:1,
    },
    addtocartbox:{
      
        borderWidth:1,
        borderColor:"#000",
        padding:20,
        margin:20,
      },
      cartbutton:{
        width:"40%",
        backgroundColor:"#000",
        marginTop:10
      }
})




export class BookClassComponent extends React.Component {

    /*
    
Class components move through these different stages in their life cycle using predefined methods, such as:

The constructor() function which is called before the component mounts.

The render() method which is a required method that should return null or a JSX element.

componentDidMount() runs after the component is rendered.

componentDidUpdate() runs immediately when the component is updated, but not on the first render.

componentDidUnmount() runs just before the component unmounts and is removed from the view.

Functional components make use of the useEffect() hook to access the life cycle behavior.
   
*/

    render() {
        return (
            <View>
              <Text style={{fontSize:30}}>React Native Class Component</Text>
            </View>
        );
    }
  }

 