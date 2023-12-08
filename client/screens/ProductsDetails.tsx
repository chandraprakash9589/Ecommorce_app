import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ProductsDetails = ({route}) => {
useEffect(()=>{
  
})
  const {params}=route
  return (
    <View>
      <Text>ProductsDetails{params.id}</Text>
    </View>
  )
}

export default ProductsDetails