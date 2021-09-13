import React,{useState} from "react";
import { SafeAreaView, StyleSheet, TextInput,Text ,Button,View,Style} from "react-native";

export default function App(){
 
  return(
    <View style={{padding:40}}>
     <View style={{flexDirection:'row '}}>
       <TextInput placeholder="Type the task" style={{borderBottomColor:"black",borderBottomWidth:1 }}>

       </TextInput>
       <Button title="ADD">

       </Button>
     </View>
      
    </View> 
  );
}

const styles = StyleSheet.create({

});