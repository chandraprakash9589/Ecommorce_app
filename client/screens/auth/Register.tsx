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
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import InputBox from '../../components/Form/InputBox';
import {register} from '../../assets/assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [filePath, setFilePath] = useState('');
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  useEffect(() => {
    loadState();
  }, []);
  const imageSet = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setFilePath(image.path);
        saveState();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city) {
      return Alert.alert('Please provide all fields');
    }
    Alert.alert('Register Successfully');
    navigation.navigate('otpScreen');
  };

  const saveState = async () => {
    try {
      await AsyncStorage.setItem('userState', JSON.stringify({filePath}));
    } catch (error) {
      console.error('Error saving user state:', error);
    }
  };

  const loadState = async () => {
    try {
      const savedState = await AsyncStorage.getItem('userState');
      if (savedState !== null) {
        const parsedState = JSON.parse(savedState);
        setFilePath(parsedState.filePath);
      }
    } catch (error) {
      console.error('Error loading user state:', error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageSelectCon} onPress={imageSet}>
        {!filePath && <Image style={styles.image} source={register} />}
        {filePath ? (
          <Image source={{uri: filePath}} style={styles.image} />
        ) : null}
        {/* <Text>Select the pic</Text> */}
      </TouchableOpacity>

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
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        onPress={toggleShowPassword}
        style={styles.showPasswordIcon}>
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={30}
          color="#aaa"
        />
      </TouchableOpacity>
      <View style={styles.inputBoxwrapper}>
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
        <View style={styles.datePicker}>
          <TouchableOpacity onPress={() => setOpenDate(true)}>
            <Text  style={{top:7,fontSize:18}} >
              {new Date(date).toLocaleDateString('en-US')}
            </Text>
          <DatePicker
            modal
            open={openDate}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
          <AntDesign
            style={{
              color: 'lightgray',
              position: 'absolute',
              right: 25,       
            }}
            name="calendar"
            size={35}
          />
           </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => handleRegister()}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already a user Please ?{''}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('login')}>
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
  imageSelectCon: {
    marginLeft: -130,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
    resizeMode: 'contain',
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120,
    top: -40,
  },
  showPasswordIcon: {
    marginLeft: 305,
    top: -45,
  },
  inputBoxwrapper: {
    top: -30,
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
  datePicker:
  {  width: "80%",
    backgroundColor: "#ffffff",
    height: 40,
    paddingLeft: 15,
    borderRadius: 10,
    right:-38,
    color: "#000000",
    borderWidth: 1,
    borderColor: "gray",}
});
export default Register;
