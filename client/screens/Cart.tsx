//@ts-nocheck
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {CartData} from '../data/CartData';
import PriceTable from '../components/Cart/PriceTable';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/Cart/CartItem';

const Cart = ({navigation}) => {
  const [cartItem, setCartItem] = useState(CartData);
  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItem.length > 0
          ? `You have ${cartItem?.length} Item left in Your Card`
          : 'OOPS Your Cart is Empty !'}
      </Text>
      {cartItem && (
        <>
          <ScrollView>
            {cartItem?.map(item => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>

          <View>
            <PriceTable title={'Price'} price={999} />
            <PriceTable title={'Tax'} price={1} />
            <PriceTable title={'Shipping'} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={'Grand Total'} price={101} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate('checkout')}>
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#1967d2',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: '#fffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Cart;
