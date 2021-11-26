import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ActivityIndicator,TextInput, Button, TouchableOpacity, ScrollView,FlatList,ImageBackground } from 'react-native';


function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('About',{data:"asad"})}
      />
        </View>
    )
}

export default Home;

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