import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Sweden.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Kolmården Zoo</Text>
          <Image source={require('../assets/Sweden1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Kolmårdens Djurpark AB operates a wildlife park in Sweden. It offers safari services for travelers to get close to animals, including lions, bears, and wolves; services to meet Siberian tigers; wild encounters, including various special events for large and small groups; and overnight accommodations in and around the wildlife park. The company also provides dolphin shows or roller coaster, penguins and seal shows, and restaurants; and a gorilla island to watch gorillas play. In addition, it offers various facilities for children, which include storybook settings, wild camp adventure camps, and a children’s farm to pet the animals; and a play area with disabled access. The company was founded in 1965 and is based in Kolmården, Sweden. Kolmårdens Djurpark AB operates as a subsidiary of Parks & Resorts Scandinavia AB.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Vasa Museum</Text>
          <Image source = {require('../assets/Sweden2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>he Vasa Museum is a maritime museum in Stockholm, Sweden. Located on the island of Djurgården, the museum displays the only almost fully intact 17th century ship that has ever been salvaged, the 64-gun warship Vasa that sank on her maiden voyage in 1628. The Vasa Museum opened in 1990 and, according to the official web site, is the most visited museum in Scandinavia. Together with other museums such as the Stockholm Maritime Museum, it belongs to the Swedish National Maritime Museums.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)The Royal Palace</Text>
          <Image source={require('../assets/Sweden3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Stockholm Palace or the Royal Palace is the official residence and major royal palace of the Swedish monarch. Stockholm Palace is on Stadsholmen, in Gamla stan in the capital, Stockholm. It neighbours the Riksdag building. The offices of the King, the other members of the Swedish Royal Family, and the Royal Court of Sweden are here. The palace is used for representative purposes by the King whilst performing his duties as the head of state. This royal residence has been in the same location by Norrström in the northern part of Gamla stan in Stockholm since the middle of the 13th century when the Tre Kronor Castle was built. In modern times the name relates to the building called Kungliga Slottet. The palace was designed by Nicodemus Tessin the Younger and erected on the same place as the medieval Tre Kronor Castle which was destroyed in a fire on 7 May 1697. Due to the costly Great Northern War which started in 1700, construction of the palace was halted in 1709, and not recommenced until 1727—six years after the end of the war.</Text>
              
        </View>
        
      </ScrollView>
    );
    
  };