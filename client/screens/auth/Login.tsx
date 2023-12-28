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
import {login_signUp} from '../../assets/assets';
import InputBox from '../../components/Form/InputBox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert('Please add email or password');
    }
    Alert.alert('Login Successfully');
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={login_signUp} />
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
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordIcon}>
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={30}
          color="#aaa"      
        />
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet ? Please{''}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('register')}>
            Register !
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

  showPasswordIcon: {
    marginLeft:305,
    top: -45,
   
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
export default Login;
