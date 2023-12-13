//@ts-nocheck
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import {userData} from '../../data/UserData';
import InputBox from '../../components/Form/InputBox';

const Profile = ({navigation}) => {
  //state
  const [email, setEmail] = useState(userData.email);
  const [profilePic, setprofilePic] = useState(userData.profilePic);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);
  const handleUpdate=()=>{
    if(!email ||!password ||!name ||!address||!city){
        return Alert.alert("Please provide all fields")
      }
      Alert.alert(" Profile Updated Successfully")
      navigation.navigate("account")
      
  }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: userData.profilePic}} />
            <Pressable onPress={() => Alert.alert('profile dialogbox')}>
              <Text style={{color: 'red'}}>update your profile pic</Text>
            </Pressable>
          </View>
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
          <TouchableOpacity style={styles.btnUpdate} onPress={()=>handleUpdate()}>
            <Text  style={styles.btnUpdateText}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 100,
      width: "100%",
      resizeMode: "contain",
    },
    btnUpdate: {
      backgroundColor: "#000000",
      height: 40,
      borderRadius: 20,
      marginHorizontal: 30,
      justifyContent: "center",
      marginTop: 10,
    },
    btnUpdateText: {
      color: "#ffffff",
      fontSize: 18,
      textAlign: "center",
    },
  });
export default Profile;
