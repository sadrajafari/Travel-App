import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Denmark from './Denmark'
import Norway from './Norway'
import Sweden from './Sweden'
import Iceland from './Icaland'
import Germany from './Germany'
import Italy from './Italy'
import France from './France'
import Netherland from './Netherland'
import Switzerland from './Switzerland'
import England from './England'
import Finland from './Finland'
import Austria from './Austria'
import Belgium from './Belgium'



function Screen({navigation}){
  return(
  <ScrollView style={{backgroundColor: 'white', marginTop: 25, backgroundColor: 'black'}} showsVerticalScrollIndicator={false}>
    <View style={{ justifyContent: 'center'}}>
      <Image source={require('../assets/Iceland.jpg')} style={{height: 190, width: '100%', borderBottomRightRadius: 80}}/>
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center', fontStyle: 'italic', marginBottom: 14, fontWeight: 'bold'}}>Euro trip</Text>
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>A travel guide for Europe</Text>
      </View>
    </View>
    <View style={{marginTop: 5, borderBottomColor: 'white', borderBottomWidth: 1}}>
      <Text style={{fontSize: 18, color: 'yellow', fontStyle: 'italic'}}>Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost part of Eurasia and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.</Text>
    </View>
    <View style={{marginTop: 10, marginLeft: 5, marginRight:5}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
        <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Denmark')}>
          <Image source={require('../assets/Denmark.jpg')} style={{ height: 170, width: 250, marginRight: 5, borderRadius: 30}}/>
          <Text style={{position: 'absolute', alignSelf: 'center', color: 'white', fontSize: 40, fontStyle: 'italic'}}>Denmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Norway')}>
          <Image source={require('../assets/Norway.jpg')} style={{ height: 170, width: 250, marginRight: 5, borderRadius: 30}} resizeMethod = 'resize' />
          <Text style={{position: 'absolute', alignSelf: 'center', color: 'white', fontSize: 40, fontStyle: 'italic'}}>Norway</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Sweden')}>
          <Image source={require('../assets/Sweden.jpg')} style={{ height: 170, width: 250, marginRight: 5, borderRadius: 30}} resizeMethod = 'resize' />
          <Text style={{position: 'absolute', alignSelf: 'center', color: 'white', fontSize: 40, fontStyle: 'italic'}}>Sweden</Text>
        </TouchableOpacity>
      </ScrollView>
      <Text style={{fontSize: 20, alignSelf: 'center', fontStyle: 'italic', fontWeight: 'bold', color: 'brown', width: '100%', marginTop: 3}}>Scandinavia</Text>
      <Text style={{color: 'white', fontSize: 16, fontStyle: 'italic' }}>Scandinavia is a subregion in Northern Europe, with strong historical, cultural, and linguistic ties. The term Scandinavia in local usage covers the three kingdoms of Denmark, Norway, and Sweden.</Text>
      <View style={{borderBottomColor: 'white', borderBottomWidth: 2, marginTop: 2, marginBottom: 10}}/>
      <View style={{flexDirection: 'column', marginBottom: 15}}>
        
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          
          <TouchableOpacity style={{height: 120, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Iceland')}>
            <Image source={require('../assets/Iceland1.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginRight: 8}}/>
            <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Iceland</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{height: 119, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Germany')}>
            <Image source={require('../assets/Germany2.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginLeft: 8}}/>
            <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Germany</Text>
          
          </TouchableOpacity>
        </View>
        
        
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
           
            <TouchableOpacity style={{height: 120, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Italy')}>
              <Image source={require('../assets/Italy.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginRight: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Italy</Text>  
            </TouchableOpacity>
           
            <TouchableOpacity style={{height: 119, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('France')}>
              <Image source={require('../assets/France1.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginLeft: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>France</Text>
            </TouchableOpacity>
        
        </View>
       
       
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            
            <TouchableOpacity style={{height: 120, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Netherland')}>
              <Image source={require('../assets/Netherland.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginRight: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Netherland</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{height: 119, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Switzerland')}>
              <Image source={require('../assets/swizerland2.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginLeft: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Swizerland</Text>
            </TouchableOpacity>
        
        </View>
       
       
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            
            <TouchableOpacity style={{height: 120, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('England')}>
              <Image source={require('../assets/England.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginRight: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>England</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{height: 119, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Finland')}>
              <Image source={require('../assets/Finland1.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginLeft: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Finland</Text>
            </TouchableOpacity>
       
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
           
            <TouchableOpacity style={{height: 120, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Austria')}>
              <Image source={require('../assets/Austria.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginRight: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Austria</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{height: 119, width: 190, justifyContent: 'flex-end'}} onPress={() => navigation.navigate('Belgium')}>
              <Image source={require('../assets/Belgium.jpg')} style={{height: 120, width: 190, borderRadius: 20, alignSelf: 'center', marginLeft: 8}}/>
              <Text style={{position: 'absolute', alignSelf: 'center', fontSize: 30, fontStyle: 'italic', color: 'white'}}>Belgium</Text>
            </TouchableOpacity>
        
        </View>



      </View>
    </View>
  </ScrollView>
  )
}




const stack = createStackNavigator();

export default function App() {
  
  return (
     <NavigationContainer >
         <stack.Navigator >
            <stack.Screen options={{headerShown: false}} name='Home Screen' component={Screen}/>
            <stack.Screen name='Denmark' component={Denmark}/>
            <stack.Screen name='Norway' component={Norway}/>
            <stack.Screen name='Sweden' component={Sweden}/>
            <stack.Screen name='Iceland' component={Iceland}/>
            <stack.Screen name='Germany' component={Germany}/>
            <stack.Screen name='Italy' component={Italy}/>
            <stack.Screen name='France' component={France}/>
            <stack.Screen name='Netherland' component={Netherland}/>
            <stack.Screen name='Switzerland' component={Switzerland}/>
            <stack.Screen name='England' component={England}/>
            <stack.Screen name='Finland' component={Finland}/>
            <stack.Screen name='Austria' component={Austria}/>
            <stack.Screen name='Belgium' component={Belgium}/>
            
        </stack.Navigator>
     </NavigationContainer>
  );  
};