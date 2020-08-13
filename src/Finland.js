import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/Finland.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>Finland is a Northern European nation bordering Sweden, Norway and Russia. Its capital, Helsinki, occupies a peninsula and surrounding islands in the Baltic Sea. Helsinki is home to the 18th-century sea fortress Suomenlinna, the fashionable Design District and diverse museums. The Northern Lights can be seen from the country's Arctic Lapland province, a vast wilderness with national parks and ski resorts.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Suomenlinna</Text>
          <Image source={require('../assets/Finland1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Suomenlinna, or Sveaborg, is an inhabited sea fortress built on eight islands about 4 km southeast of the city center of Helsinki, the capital of Finland. Suomenlinna is a UNESCO World Heritage site that is popular with tourists and locals, who enjoy it as a picturesque picnic site. Originally named Sveaborg, or Viapori as referred to by Finnish-speaking Finns, it was renamed in Finnish to Suomenlinna in 1918 for patriotic and nationalistic reasons, though it is still known by its original name in Sweden and by Swedish-speaking Finns. The Swedish crown commenced the construction of the fortress in 1748 as protection against Russian expansionism. The general responsibility for the fortification work was given to Augustin Ehrensvärd. The original plan of the bastion fortress was strongly influenced by the ideas of Vauban, the foremost military engineer of the time, and the principles of the star fort style of fortification, albeit adapted to a group of rocky islands.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Linnanmaki</Text>
          <Image source = {require('../assets/Finland2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>Linnanmäki is an amusement park in Helsinki, Finland. It was opened on 27 May 1950 and is owned by non-profit Lasten Päivän Säätiö, which operates the park in order to raise funds to Finnish child welfare work. In 2019, the foundation donated a total of 4.5 million euros. Linnanmäki is the most popular amusement park in Finland. It has many rides of different sizes. It also has other attractions, such as arcades, games, kiosks, restaurants and an outdoor stage on which different performers appear in the summer. Annually the park is visited by over 1 million guests.</Text>
             
        </View>
        
      </ScrollView>
    );
    
  };