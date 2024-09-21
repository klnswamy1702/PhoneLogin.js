import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/styles';

const PhoneNumberInput = ({ value, setValue }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Phone Number"
      keyboardType="phone-pad"
      maxLength={10}
      value={value}
      onChangeText={setValue}
    />
  );
};

export default PhoneNumberInput;
