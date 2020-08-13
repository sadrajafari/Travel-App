import * as React from 'react';
import { Text, View, Image , ScrollView} from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Italy.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s "David" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Colosseum</Text>
          <Image source={require('../assets/Italy1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. Further modifications were made during the reign of Domitian. These three emperors are known as the Flavian dynasty, and the amphitheatre was named in Latin for its association with their family name.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Leaning Tower of Pisa</Text>
          <Image source = {require('../assets/Italy2.jpeg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its nearly four-degree lean, the result of an unstable foundation. The tower is situated behind the Pisa Cathedral and is the third-oldest structure in the city's Cathedral Square, after the cathedral and the Pisa Baptistry. The height of the tower is 55.86 metres from the ground on the low side and 56.67 metres on the high side. The width of the walls at the base is 2.44 m. Its weight is estimated at 14,500 metric tons. The tower has 296 or 294 steps; the seventh floor has two fewer steps on the north-facing staircase.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Uffizi Gallery</Text>
          <Image source={require('../assets/Italy3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Uffizi Gallery is a prominent art museum located adjacent to the Piazza della Signoria in the Historic Centre of Florence in the region of Tuscany, Italy. One of the most important Italian museums and the most visited, it is also one of the largest and best known in the world and holds a collection of priceless works, particularly from the period of the Italian Renaissance. After the ruling house of Medici died out, their art collections were gifted to the city of Florence under the famous Patto di famiglia negotiated by Anna Maria Luisa, the last Medici heiress. The Uffizi is one of the first modern museums.</Text>
              
        </View>
        
      </ScrollView>
    );
    
  };