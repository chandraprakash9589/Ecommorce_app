import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CartData } from '../data/CartData'
import PriceTable from '../components/Cart/PriceTable'

const Cart = () => {
    const[cartItem,setCartItem] =useState(CartData)
  return (
    <View>
        <Text style={styles.heading}>
            {cartItem.length>0
            ?`You have ${cartItem?.length} Item left in Your Card`:"OOPS Your Cart is Empty !"}
        </Text>
        {cartItem &&(
            <>
            <Text>CART ITEMS</Text>
            <View>
              <PriceTable title={"Price"}price={999}/>
              <PriceTable title={"Tax"}price={1}/>
              <PriceTable title={"Shipping"}price={1}/>

            </View>
            </>
        )}
    </View>
  )
}
const styles=StyleSheet.create({
    heading:{
       textAlign:"center",
       color:"green" ,
       marginTop:10,
       
    }
})
export default Cart