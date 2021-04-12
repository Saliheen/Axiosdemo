import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Newsdata from './Pages/Newspage';
const Stack = createStackNavigator();

function App(){
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="News Page" component={Newsdata}/>
    </Stack.Navigator>
  </NavigationContainer>);
}
export default App;