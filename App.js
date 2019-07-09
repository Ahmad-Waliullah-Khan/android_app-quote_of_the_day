/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     isLoading: true,
     dataSource: null,
   };
 }

 componentDidMount() {
   return fetch('http://quotes.rest/qod.json')
     .then(response => response.json())
     .then(responseJson => {
       this.setState(
         {
           isLoading: false,
           dataSource: responseJson.contents.quotes[0],
         },
         function() {}
       );
     })
     .catch(error => {
       console.error(error);
     });
 }

 render() {
   if (this.state.isLoading) {
     return (
       <View style={{ flex: 1, padding: 20 }}>
         <ActivityIndicator />
       </View>
     );
   }

   return(
     <View style={{flex: 1}}>
       <ImageBackground source={{uri : this.state.dataSource.background}} style={{flex: 1,  resizeMode: 'cover'}}> 
        <View style={{flex: 1, paddingTop:20, paddingLeft:20, paddingRight:20, }}>
        <Text style={{paddingTop:30, fontSize:20, fontFamily: 'Courier New', paddingBottom:10}} >{this.state.dataSource.quote}</Text>
       <Text> - {this.state.dataSource.author}</Text>
        </View>
        </ImageBackground>

     </View>
   );

 }
}



