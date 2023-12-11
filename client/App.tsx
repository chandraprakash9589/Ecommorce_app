import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/About';
import ProductsDetails from './screens/ProductsDetails';
import Cart from './screens/Cart';

//routes
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="home" component={Home} 
      options={{
        headerShown:false,
      }}
      />
      <Stack.Screen name="mobile" component={About}/>
      <Stack.Screen name="productDetails" component={ProductsDetails}/>
      <Stack.Screen name="notifications" component={About}/>
      <Stack.Screen name="cart" component={Cart}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
