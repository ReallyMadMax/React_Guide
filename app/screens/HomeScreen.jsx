// HomeScreen.jsx
import React from 'react';
import { SafeAreaView, Button, View, StyleSheet } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation, tasks, addTask }) {
  return (
    <MainLayout>
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={styles.buttonContainer}>
        <Button
          title="About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
  }
});