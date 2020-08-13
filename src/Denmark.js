import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Denmark.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands. It's linked to nearby Sweden via the Öresund bridge. Copenhagen, its capital, is home to royal palaces and colorful Nyhavn harbor, plus the Tivoli amusement park and the iconic “Little Mermaid” statue. Odense is writer Hans Christian Andersen’s hometown, with a medieval core of cobbled streets and half-timbered houses.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Tivoli Gardens</Text>
          <Image source={require('../assets/Denmark1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Tivoli, also known as Tivoli Gardens, is an amusement park and pleasure garden in Copenhagen, Denmark. The park opened on 15 August 1843 and is the second-oldest operating amusement park in the world, after Dyrehavsbakken in nearby Klampenborg, also in Denmark. With 4.6 million visitors in 2017, Tivoli is the second-most popular seasonal theme park in the world after Europa-Park. Tivoli is the fifth-most visited theme park in Europe, behind Disneyland Park, Europa-Park, Walt Disney Studios Park and Efteling. It is located directly in downtown Copenhagen, next to the Central rail station for the city.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Amalienborg</Text>
          <Image source = {require('../assets/Denmark2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Amalienborg is the home of the Danish royal family, and is located in Copenhagen, Denmark. It consists of four identical classical palace façades with rococo interiors around an octagonal courtyard; in the centre of the square is a monumental equestrian statue of Amalienborg's founder, King Frederick V. Amalienborg was originally built for four noble families; however, when Christiansborg Palace burned on 26 February 1794, the royal family bought the palaces and moved in. Over the years various monarchs and their families have resided in the four different palaces.</Text>
             
        </View>
        
      </ScrollView>
    );
    
  };