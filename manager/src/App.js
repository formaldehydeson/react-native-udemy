import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCg7_bk-76TAUmwzVmHjgSMW6mmUSwVNck",
      authDomain: "manager-2b6f1.firebaseapp.com",
      databaseURL: "https://manager-2b6f1.firebaseio.com",
      projectId: "manager-2b6f1",
      storageBucket: "manager-2b6f1.appspot.com",
      messagingSenderId: "1054637882327"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;