import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Austria.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Austria, officially the Republic of Austria, is a landlocked East Alpine country in the southern part of Central Europe. It is composed of nine federated states, one of which is Vienna, Austria's capital and its largest city.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Schönbrunn Palace</Text>
          <Image source={require('../assets/Austria1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Schönbrunn Palace was the main summer residence of the Habsburg rulers, located in Hietzing, Vienna. The 1,441-room Rococo palace is one of the most important architectural, cultural, and historic monuments in the country. Since the mid-1950s it has been a major tourist attraction. The history of the palace and its vast gardens spans over 300 years, reflecting the changing tastes, interests, and aspirations of successive Habsburg monarchs.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Vienna State Opera</Text>
          <Image source = {require('../assets/Austria2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Vienna State Opera is an opera house and opera company based in Vienna, Austria. The 1,709-seat Renaissance Revival venue was the first major building on the Vienna Ring Road. It was built from 1861 to 1869 following plans by August Sicard von Sicardsburg and Eduard van der Nüll, and designs by Josef Hlávka. The opera house was inaugurated as the "Vienna Court Opera" in the presence of Emperor Franz Joseph I and Empress Elisabeth of Austria. It became known by its current name after the establishment of the First Austrian Republic in 1921. The Vienna State Opera is the successor of the Vienna Court Opera, the original construction site chosen and paid for by Emperor Franz Joseph in 1861. The members of the Vienna Philharmonic are recruited from the Vienna State Opera's orchestra. The building is also the home of the Vienna State Ballet, and it hosts the annual Vienna Opera Ball during the carnival season.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Prater</Text>
          <Image source={require('../assets/Austria3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Prater is a large public park in Vienna's 2nd district. The Wurstelprater, an amusement park that is often simply called "Prater", lies in one corner of the Wiener Prater and includes the Wiener Riesenrad Ferris wheel.</Text>
              
        </View>
        
      </ScrollView>
    );
    
  };