import * as React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';




export default function App() {
  
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{margin: 10}}>
          <Image source={require('../assets/France.jpg')} style={{width: '100%', height: 300, borderRadius: 20}}/>
          <Text style={{paddingTop: 10, color: 'yellow', fontSize: 18}}>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.</Text>
          <Text style={{color: 'green', fontSize: 23, fontStyle: 'italic'}}>Where you should visit:</Text>
          <Text style={{color: 'yellow', fontSize: 20, marginTop: 10}}>1)Eiffel Tower</Text>
          <Image source={require('../assets/France1.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015. The tower is 324 metres tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres.</Text>
          <Text style={{color: 'yellow', fontSize: 20, fontStyle: 'italic', marginTop: 10}}>2)Palace of Versailles</Text>
          <Image source = {require('../assets/France2.jpg')} style={{width: '100%', height: 300, borderRadius: 20, marginTop: 10}}/>
          <Text style={{color: 'white', fontSize: 17, marginTop: 10}}>The Palace of Versailles was the principal royal residence of France from 1682, under Louis XIV, until the start of the French Revolution in 1789, under Louis XVI. It is located in the department of Yvelines, in the region of Île-de-France, about 20 kilometres southwest of the centre of Paris. A simple hunting lodging and later a small château with a moat occupied the site until 1661, when the first work expanding the château into a palace was carried out for Louis XIV. In 1682, when the palace had become large enough, the king moved the entire royal court and the French government to Versailles. Some of the palace furniture at this time was constructed of solid silver, but in 1689 much of it was melted down to pay for the cost of war. Subsequent rulers mostly carried out interior remodeling, to meet the demands of changing taste, although Louis XV did install an opera house at the north end of the north wing for the wedding of the Dauphin and Marie Antoinette in 1770. The palace has also been a site of historical importance. </Text>
             
        </View>
        
      </ScrollView>
    );
    
  };