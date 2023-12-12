import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { login_signUp } from '../../assets/assts';
const Login = () => {

  return (
    <View style={styles.container}>
      
      <Image
        style={styles.image}
        source={login_signUp}
      />
      <Text>Email</Text>
      <TextInput/>
      <TouchableOpacity>
        <Text>Password</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles =StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  }
})
export default Login