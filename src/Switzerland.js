import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Switzerland.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Jungfrau</Text>
          <Image source={require('../assets/swizerland2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Jungfraujoch is an alpine attraction and viewing point, at an altitude of 3454 m. It is located in between the well known mountains Mönch and Jungfrau, in the heart of the UNESCO Natural World Heritage property "Jungfrau - Aletsch - Bietschhorn". The cogwheel train is the only way to get there. The train station is the highest one in Europe.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Chillon Castle</Text>
          <Image source = {require('../assets/switzerland3.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Chillon Castle is an island castle located on Lake Geneva, south of Veytaux in the canton of Vaud. It is situated at the eastern end of the lake, on the narrow shore between Montreux and Villeneuve, which gives access to the Alpine valley of the Rhône. Chillon is amongst the most visited castles in Switzerland and Europe. Successively occupied by the house of Savoy then by the Bernese from 1536 until 1798, it now belongs to the State of Vaud and is classified as a Swiss Cultural Property of National Significance. The Fort de Chillon, its modern counterpart, is hidden in the steep side of the mountain.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>3)Chapel Bridge</Text>
          <Image source={require('../assets/switzerland4.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Chapel Bridge is a covered wooden footbridge spanning the river Reuss diagonally in the city of Lucerne in central Switzerland. Named after the nearby St. Peter's Chapel, the bridge is unique in containing a number of interior paintings dating back to the 17th century, although many of them were destroyed along with a larger part of the centuries-old bridge in a 1993 fire. Subsequently restored, the Chapel Bridge is the oldest wooden covered bridge in Europe, as well as the world's oldest surviving truss bridge. It serves as the city's symbol and as one of Switzerland's main tourist attractions.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>4)Titlis</Text>
          <Image source={require('../assets/switzerland5.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Titlis is a mountain of the Uri Alps, located on the border between the cantons of Obwalden and Bern. At 3,238 metres above sea level, it is the highest summit of the range north of the Susten Pass, between the Bernese Oberland and Central Switzerland. It is mainly accessed from Engelberg on the north side and is famous as the site of the world's first rotating cable car. The cable car system connects Engelberg to the summit of Klein Titlis through the three stages of Gerschnialp, Trübsee and Stand. The last part of cable car leads above the glacier. At Klein Titlis, it is possible to visit an illuminated glacier cave from an entrance within the cable-car station, which also includes shops and restaurants. The Titlis Cliff Walk, the highest elevation suspension bridge in Europe, opened in December 2012, giving views across the Alps. Many people use Titlis as a cheaper and easier option than Jungfraujoch.</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10, fontStyle: 'italic'}}>5)Swiss National Museum</Text>
          <Image source={require('../assets/switzerland6.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Swiss National Museum —part of the Musée Suisse Group, itself affiliated with the Federal Office of Culture is located in the city of Zurich, Switzerland's largest city, next to the Hauptbahnhof. The museum building of 1898 in the historicist style was built by Gustav Gull in the form of the French Renaissance city chateaus. His impressive architecture with dozens of towers, courts and his astonishing park on a peninsula between the rivers Sihl and Limmat has become one of the main sights of the Old City District of Zurich. The exhibition tour takes the visitor from prehistory through ancient times and the Middle Ages to the 20th century. There is a very rich section with gothic art, chivalry and a comprehensive collection of liturgical wooden sculptures, panel paintings and carved altars. Zunfthaus zur Meisen near Fraumünster church houses the porcelain and faience collection of the Swiss National Museum.</Text>

        </View>
        
      </ScrollView>
    );
    
  };