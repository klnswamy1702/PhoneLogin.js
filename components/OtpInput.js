import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/styles';

const OtpInput = ({ otp, handleOtpChange, inputs }) => {
  return (
    <View style={styles.otpContainer}>
      {otp.map((_, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(value) => handleOtpChange(value, index)}
          ref={(input) => (inputs.current[index] = input)}
        />
      ))}
    </View>
  );
};

export default OtpInput;
