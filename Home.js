import React from 'react';
import { StyleSheet, Text, View , TextInput , Button , Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { 
      word: '',
       definition: '',
       moreInfo:''
      };
  }

 

  getData = async(text) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
    let response = await fetch(url);
    let json = await response.json();

    let moreData = `https://www.thesaurus.com/browse/${text}`

    const word = json[0].word;
    console.log(word);
   const definition = json[0].meanings[0].definitions[0].definition;
   console.log(definition);

   this.setState({
    word: word.trim(),
    definition: definition.trim(),
    moreInfo:moreData
  });
  }



  render() {
    return (
     
      <View style={styles.container}>
      <View style={styles.row}>
      <Icon style={styles.icon} name="search" color='#7f5af0' size={27} />
        <Text style={styles.title}>Search</Text>
        </View>
        <TextInput
        placeholder="Type here to discover!"
        placeholderTextColor = "white"
        keyboardAppearance="dark"
        style={styles.input}
        onChangeText={(text) => {
         this.getData(text)
        }}
      ></TextInput>

      <Text style={styles.text}>{this.state.word}</Text>
      <Text style={styles.text}>{this.state.definition}</Text>
      <Button title='more Info'   onPress={() => Linking.openURL(this.state.moreInfo)}  />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16161a",
    padding:50
  },
 
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    height: 40,
    width: 200,
    color:"#ffffff",
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
  text:{
    color:'#fffffe',
    padding:20, 
  }

});