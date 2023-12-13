//@ts-nocheck
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/Form/InputBox';
import { register } from '../../assets/assets';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');


const handleRegister=()=>{
if(!email ||!password ||!name ||!address||!city){
  return Alert.alert("Please provide all fields")
}
Alert.alert("Register Successfully")
navigation.navigate("login")

}
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={register} />
      <InputBox
        placeholder={'Enter You Name'}
        value={name}
        setValue={setName}
        autoComplete={'name'}
      />
      <InputBox
        placeholder={'Enter You Email'}
        value={email}
        setValue={setEmail}
        autoComplete={'email'}
      />

      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={'Enter You Password'}
        secureTextEntry={true}
      />
      <InputBox
        value={address}
        setValue={setAddress}
        placeholder={'Enter You address'}
        autoComplete={'address-line1'}
      />
    
      <InputBox
        value={city}
        setValue={setCity}
        placeholder={'Enter You city'}
        autoComplete={'country'}
      />
      <InputBox
        value={contact}
        setValue={setContact}
        placeholder={'Enter You contact no'}
        autoComplete={'tel'}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>handleRegister()}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already  a user Please ?{""}
        
        <Text style={styles.link}
        onPress={()=>navigation.navigate("login")}
        >
          Login !
        </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#000000',
    width: '80%',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: '#ffffff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 18,
  },
  link: {
    color: 'red',
  },
});
export default Register