//@ts-nocheck
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Checkout = ({navigation}) => {
    const handleCOD=()=>{
        Alert.alert("Your Order has been Placed Successfully")
    }
    const handleOnline=()=>{
        Alert.alert("You redirect to payment getway ");
        navigation.navigate('payment')
    }
  return (
    <Layout>

    <View style={styles.container}>
      <Text style={styles.heading}>Payment Options</Text>
      <Text style={styles.price}>Total Amount :1015</Text>
      <View >
        <Text style={styles.paymentHeading}>Select you payment Mode</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={()=>handleCOD()}>
          <Text style={styles.paymentBtnText}>Cash On Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={()=>handleOnline()}>
          <Text style={styles.paymentBtnText}>online (CREDIT OR DEBIT CARD)</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>

  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 20,
  },
  price: {
    fontSize:20,
    marginBottom:10,
    color:"gray"
  },
  paymentHeading:{
color:"gray",
marginBottom:10,
  },
  paymentBtn:{
    backgroundColor:'#1967d2',
    height:40,
    borderRadius:10,
    justifyContent:'center',
    marginVertical:10

  },
  paymentBtnText:{
    // color:'#ffffff',
    textAlign:"center"
  }
});
export default Checkout;
