import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './screens/About';
import ProductsDetails from './screens/ProductsDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/Account/Account';
import Notification from './screens/Account/Notification';
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/admin/Dashboard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//routes
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <GestureHandlerRootView>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="mobile" component={About} />
        <Stack.Screen name="productDetails" component={ProductsDetails} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen
         name="login" component={Login}
          options={{
          headerShown:false
        }} 
        />
        <Stack.Screen
         name="register" component={Register} 
        />
                <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="notifications" component={Notification} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="myorders" component={MyOrders} />
        <Stack.Screen name="cart" component={Cart} />   
        <Stack.Screen name="dashboard" component={Dashboard} />     
  
      </Stack.Navigator>
    </NavigationContainer>
    // </GestureHandlerRootView>

  );
};
export default App;
