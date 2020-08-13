import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Iceland.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Seljalandsfoss</Text>
          <Image source={require('../assets/Iceland1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Seljalandsfoss is one of the best-known waterfalls in Iceland. It is 65 meters tall according to the National Land Survey of Iceland and it is breathtakingly beautiful. It is a must visiting Seljalandsfoss when visiting the south-coast, you will not regret it! Seljalandsfoss is located in the South Region in Iceland right by Route 1 and the road that leads to Þórsmörk Road 249. The waterfall is part of the Seljalands River that has its origin in the volcano glacier Eyjafjallajökull. Visitors can walk behind the falls into a small cave.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Ystafell Transportation Museum</Text>
          <Image source = {require('../assets/Iceland2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Transportation Museum at Ystafell is the oldest transportation museum in Iceland, established in 1998 and opened in July 2000. Located between Akureyri and Húsavík it sits in the valley Kaldakinn. The museum features a collection of historic cars and trucks, and displays about roads and road transport in Iceland.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Diamond Beach</Text>
          <Image source={require('../assets/Iceland3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Great place to visit. The black sand and big chunks of ice look very nice together.</Text>
        </View>
        
      </ScrollView>
    );
    
  };