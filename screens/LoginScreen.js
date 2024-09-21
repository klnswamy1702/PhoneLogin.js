import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import PhoneNumberInput from '../components/PhoneNumberInput';
import OtpInput from '../components/OtpInput';
import styles from '../styles/styles';

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [step, setStep] = useState(1); // Step 1: Phone, Step 2: OTP

  const inputs = useRef([]);

  const handlePhoneNumberSubmit = () => {
    if (phoneNumber.length === 10) {
      setStep(2); // Move to OTP step after phone number input
      Alert.alert('OTP Sent', 'Check your phone for the OTP.');
    } else {
      Alert.alert('Error', 'Please enter a valid phone number');
    }
  };

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Please enter a 4-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 ? (
        <>
          <Text style={styles.title}>Enter Phone Number</Text>
          <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber} />
          <TouchableOpacity onPress={handlePhoneNumberSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Generate OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Enter OTP</Text>
          <OtpInput otp={otp} handleOtpChange={handleOtpChange} inputs={inputs} />
          <TouchableOpacity onPress={handleOtpSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
