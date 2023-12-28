import {StyleSheet, Text, View} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import MyButton from './MyButton';
import MyText from './MyText';
import {useState} from 'react';

const OtpScreen = ({navigation}: any) => {
  const [otpValue, setotpValue] = useState('');

  const varifyOtp = () => {
    console.log('OtpScreen', otpValue);
  };

  return (
    <View style={styles.container}>
      <MyText text="Enter Otp" varient="large" style={styles.Heading} />
      <OTPTextInput
        inputCount={6}
        offTintColor="#DCDCDC"
        tintColor="#DCDCDC"
        autoFocus={true}
        containerStyle={styles.containerOTP}
        handleTextChange={e => setotpValue(e)}
        textInputStyle={styles.containerOtpInput}
      />
      <MyButton style={styles.verifyOtpButton} onPress={varifyOtp}>
        <Text style={styles.verifyOtpButtonText}   onPress={() => navigation.navigate('login')}>Verify otp</Text>
      </MyButton>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    marginBottom: 40,
    color:"#f96b24"
  },
  containerOTP: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  containerOtpInput: {
    backgroundColor: 'aliceblue',
    padding: 5,
    borderRadius: 7,
  },
  verifyOtpButton: {
    backgroundColor: 'skyblue',
    paddingVertical: 8,
    paddingHorizontal: 28,
    marginTop: 25,
  },
  verifyOtpButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
});
