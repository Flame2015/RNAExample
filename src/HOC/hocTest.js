import React, { useState } from "react";
import { Button, Text, View } from "react-native";

// linked in home.js

export function GenCounter(props){
    const [genCounter,SetGenCount] = useState(0)
    const {value} = props
    return(
        <View>
            {value ? <Text>From HOC value {value}</Text>:null}
            <Text style={{fontSize:30}}>General Count is  : {genCounter}</Text>
            <Button title="Update GenCounter" onPress={()=>SetGenCount(genCounter+1)}/>
        </View>
    )
}

export function HOCGenCounter(props){
    return <View style={{color:"green"}}>
        <Text style={{fontSize:30, color:"red"}}>
            Hoc Counter
        </Text>
        <props.component value={props.value}/> 
    </View>
}

