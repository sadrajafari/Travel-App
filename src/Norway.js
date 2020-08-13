import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Norway.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Geirangerfjord</Text>
          <Image source={require('../assets/Norway1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality. It is a 15-kilometre -long branch off the Sunnylvsfjorden, which is a branch off the Storfjorden. The small village of Geiranger is located at the end of the fjord where the Geirangelva river empties into it.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)The Vigeland Park</Text>
          <Image source = {require('../assets/Norway2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Park & museum of Vigeland's sculpture</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Viking Ship Museum</Text>
          <Image source={require('../assets/Norway3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Viking Ship Museum is located on the Bygdøy peninsula in Oslo, Norway. It is part of the Museum of Cultural History of the University of Oslo, and houses three Viking era burial ships that were found as part of archaeological finds from Tune, Gokstad, Oseberg and the Borre mound cemetery.</Text>
              
        </View>
        
      </ScrollView>
    );
    
  };