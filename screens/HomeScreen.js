import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.subtitle}>You have successfully logged in.</Text>
    </View>
  );
}
