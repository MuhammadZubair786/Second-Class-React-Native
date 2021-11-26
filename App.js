import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  ActivityIndicator,TextInput, Button, TouchableOpacity, ScrollView,FlatList,ImageBackground } from 'react-native';
import Navigation from './src/config/Navigation';
export default function App() {
  const [name, setname] = useState();

  const [data,setdata] = useState()
  console.log(data)
  

  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
    
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
    
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
    
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
    
  // ];

  return (
    <View style={styles.container}>
      {/* <TextInput
        secureTextEntry={true}
        // multiline={true} 
        value={name}
        onChangeText={(e) => console.log(e)}
        // autoCapitalize={false}
        keyboardType={"default"}
        placeholder="Enter Email" style={{ width: 300, height: 50, borderColor: 'grey', borderWidth: 3 }}>
      </TextInput>
      <ScrollView>
        <View style={{

          backgroundColor: 'blue', width: 80 + '%', marginTop: 80, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>

        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>

        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>

        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>
        </View>
        <View style={{ backgroundColor: 'blue', width: 80 + '%', marginTop: 10, height: 50, marginLeft: 20, alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }} >Data</Text>

        </View>

        <Button title={"Click "} onPress={()=>alert("OK")}/> 
       <TouchableOpacity activeOpacity={0.3} style={{backgroundColor:'red',width:200,marginTop:20}}>
        <Text style={{textAlign:"center",color:"white",fontSize:30}}>Click me</Text>
      </TouchableOpacity> 
         <View style={{ flex: 2, backgroundColor: 'red', marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 40 }}>Header</Text>


      </View>
      <View style={{ flex: 6, backgroundColor: 'green' }}> 
         <Text style={{color:'white',fontSize:20}}>Body</Text> 
         <View style={styles.box}>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>
          <View style={{ width: 100, height: 100, marginBottom: 10, backgroundColor: 'white' }}></View>

        </View>
        <View>

        </View>


        </View>
         <View style={{ flex: 2, backgroundColor: 'yellow' }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Footer</Text>
      </View>
      </ScrollView> */}
      {/* <ScrollView> */}
        {/* <View style={{marginTop:20}}>
      {[1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
        return(
         
        <View style={{backgroundColor:'white',
        height:100,
        width:80+'%',
        paddingTop:50,
        alignContent:'center',
        marginLeft:"auto",
        borderBottomWidth:2,
        borderBottomColor:'red',
        marginRight:'auto',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,}}>
          <Text style={{color:'black',fontSize:30,textAlign:"center"}}>{v} </Text>
          </View>
        
      )})}
      
      </View> */}
      {/* <FlatList
      data={DATA}
      renderItem={(data)=>{
        return(
        
         <View style={{backgroundColor:'white',
        height:100,
        width:80+'%',
        paddingTop:50,
        alignContent:'center',
        marginLeft:"auto",
        borderBottomWidth:2,
        borderBottomColor:'red',
        marginRight:'auto',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,}}>
          <Text style={{color:'black',fontSize:30,textAlign:"center"}}>{data.item.title} </Text>
 </View>
          
        )
      }}


      /> */}

      {/* </ScrollView> */}
      {/* <ImageBackground style={{width:100+"%",height:100+"%"}}  source={{uri:""}}>
        <Text style={{color:'white',fontSize:30}}>Hello</Text>
      </ImageBackground> */}
      {/* {data==undefined ?
       <ActivityIndicator color='red' size="large" />
       :
       <Text>{data}</Text>
      } */}
      {/* <Text>Clik</Text> */}
      {/* <Button title={"click me"} onPress={()=>setdata("asad")}></Button> */}
     


<Navigation/>
    </View>
  );
}

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
