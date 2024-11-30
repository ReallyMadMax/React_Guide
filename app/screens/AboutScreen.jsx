// AboutScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
  const currentDate = new Date().toLocaleDateString();
  
  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.text}>App Name: To Do List</Text>
      <Text style={styles.text}>Created by: Max Dilger</Text>
      <Text style={styles.text}>Date: {currentDate}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  }
});