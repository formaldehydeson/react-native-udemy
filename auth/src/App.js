import React from "react";
import { StyleSheet, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDy9kRjZj5rKQquhaQ4ebhajVmq9IZwIRY',
      authDomain: 'auth-e01e1.firebaseapp.com',
      databaseURL: 'https://auth-e01e1.firebaseio.com',
      projectId: 'auth-e01e1',
      storageBucket: 'auth-e01e1.appspot.com',
      messagingSenderId: '10492590999'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={"Authentication"}/>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
