import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ActivityIndicator,TextInput, Button, TouchableOpacity, ScrollView,FlatList,ImageBackground } from 'react-native';


function About({route}){

    const {data,otherParam} = route.params;
    console.log(data)

    
    return(
        <View style={styles.container}>
            <Text>About</Text>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:100
  
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: 'center'
  
  
    }
  });