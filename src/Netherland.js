import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Netherland.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century "Golden Age."</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Rijksmuseum</Text>
          <Image source={require('../assets/Netherland1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw. The Rijksmuseum was founded in The Hague on 19 November 1798 and moved to Amsterdam in 1808, where it was first located in the Royal Palace and later in the Trippenhuis. The current main building was designed by Pierre Cuypers and first opened in 1885. On 13 April 2013, after a ten-year renovation which cost € 375 million, the main building was reopened by Queen Beatrix.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)ARTIS</Text>
          <Image source = {require('../assets/Netherland2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Artis, short for Natura Artis Magistra, is a zoo in the centre of Amsterdam. It is the oldest zoo in the Netherlands and one of the oldest zoos of mainland Europe. In addition to the zoo, Artis also contains an aquarium and a planetarium. Artis also has an arboretum and a fairly large art and sculpture collection. A part of the art collection is on display in the Aquarium building of the zoo. Artis contains 27 historically significant buildings, bridges, and ponds most of which are still used as animal enclosures, making it an unique place of 19th-century cultural heritage.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Market Hall</Text>
          <Image source={require('../assets/Netherland3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Markthal (English: Market Hall) is a residential and office building with a market hall underneath, located in Rotterdam. The building was opened on October 1, 2014, by Queen Máxima of the Netherlands. Besides the large market hall, the complex houses 228 apartments, 4600 m2 retail space, 1600 m2 horeca and an underground 4-storey parking garage with a capacity of 1200+ cars.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>4)Attractiepark Slagharen</Text>
          <Image source={require('../assets/Netherland4.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Attractie- and Vakantiepark Slagharen is an Amusement park and a holiday resort in Slagharen, located in the Dutch province Overijssel. The park opened in 1963 and was originally named Ponypark Slagharen. The logo contains the english name Slagharen Themepark & Resort. The Amusement park contains two areas, which are connected by a main street containing shops and restaurants. The park has more than 30 attractions, including 2 Roller coasters. The park contains 6 themed areas: Indian, Yellowstone, New Orleans, Mexican, Wild West and Jules Adventureland. In the southern area the entrance can be found. this area also contains the rides: Apollo, Enterprise and Free Fall. </Text>
         
        </View>
        
      </ScrollView>
    );
    
  };