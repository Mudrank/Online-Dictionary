import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './Home'


export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
         <View style={styles.row}>
      <Icon style={styles.icon} name="book" color='#7f5af0' size={27} />
        <Text style={styles.title}>Binglist</Text>
        </View>
    </View>
    
<HomeScreen/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16161a",
  },
  header: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16161a",
  },
  row:{
    flexDirection:'row' 
   },
   icon:{
     padding:10
   },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fffffe",
  },
});