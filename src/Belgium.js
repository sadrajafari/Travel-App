import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Belgium.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Austria, officially the Republic of Austria, is a landlocked East Alpine country in the southern part of Central Europe. It is composed of nine federated states, one of which is Vienna, Austria's capital and its largest city.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Atomium</Text>
          <Image source={require('../assets/Belgium1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Atomium is a landmark building in Brussels, originally constructed for the 1958 Brussels World’s Fair. It is located on the Heysel Plateau, where the exhibition took place. It is now a museum. Designed by the engineer André Waterkeyn and architects André and Jean Polak, it stands 102 m tall. Its nine 18 m diameter stainless steel clad spheres are connected, so that the whole forms the shape of a unit cell of an α-iron crystal magnified 165 billion times. Tubes of 3 m diameter connect the spheres along the 12 edges of the cube and all eight vertices to the centre. They enclose stairs, escalators and a lift to allow access to the five habitable spheres, which contain exhibit halls and other public spaces. The top sphere includes a restaurant which has a panoramic view of Brussels. This site is served by Heysel/Heizel metro station on line 6 of the Brussels metro.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Gravensteen</Text>
          <Image source = {require('../assets/Belgium2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Gravensteen is a medieval castle at Ghent, East Flanders in Belgium. The current castle dates from 1180 and was the residence of the Counts of Flanders until 1353. It was subsequently re-purposed as a court, prison, mint, and even as a cotton factory. It was restored over 1893–1903 and is now a museum and a major landmark in the city.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Bobbejaanland</Text>
          <Image source={require('../assets/Belgium3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Bobbejaanland is a theme park in Lichtaart, Belgium. The park was founded by Bobbejaan Schoepen, a Flemish singer, guitarist, and entertainer who enjoyed international popularity in the fifties and early sixties. In 1959 he bought a 30 hectare marsh, had it drained and built a 1000 capacity venue that opened in December 1961 as Bobbejaanland. This developed into an amusement park and remained in his possession until he sold it in 2004.</Text>
              
        </View>
        
      </ScrollView>
    );
    
  };