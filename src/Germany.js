import * as React from 'react';
import { Text, View, Image , ScrollView} from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Germany.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Neuschwanstein Castle</Text>
          <Image source={require('../assets/Germany1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of Richard Wagner. Ludwig paid for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. The castle was intended as a home for the King, until he died in 1886. It was open to the public shortly after his death. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Brandenburg Gate</Text>
          <Image source = {require('../assets/Germany2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the temporary restoration of order during the Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg. It is located in the western part of the city centre of Berlin within Mitte, at the junction of Unter den Linden and Ebertstraße, immediately west of the Pariser Platz. One block to the north stands the Reichstag building, which houses the German parliament.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Eibsee</Text>
          <Image source={require('../assets/Germany3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Eibsee is a lake in Bavaria, Germany, 9 km southwest of Garmisch-Partenkirchen and roughly 100 km southwest of Munich. It is 973.28 metres above sea-level and its surface area is 177.4 hectares. It is at the northerly base of the Zugspitze, Germany's highest mountain. The lake lies within the municipality of Grainau and is privately-owned.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>4)Phantasialand</Text>
          <Image source={require('../assets/germany4.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Phantasialand is a theme park in Brühl, North Rhine-Westphalia, Germany that attracts approximately 2 million visitors annually. The park was opened in 1967 by Gottlieb Löffelhardt and Richard Schmidt. Although starting as a family-oriented park, Phantasialand has also added thrill rides, especially during recent years. Furthermore, following the example of Europa-Park, they have decided to attract business customers beside the regular ones, calling it "Business to Pleasure".

Among the park's thrill rides is Taron (the world's fastest multi-launch coaster), Black Mamba (a Bolliger and Mabillard inverted coaster) and a themed Mine Train roller coaster called Colorado Adventure, which runs among some mountains in the park's Wild West section and was opened by Michael Jackson. </Text>
         
        </View>
        
      </ScrollView>
    );
    
  };