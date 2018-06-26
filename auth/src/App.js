import React from "react";
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
	state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDy9kRjZj5rKQquhaQ4ebhajVmq9IZwIRY',
      authDomain: 'auth-e01e1.firebaseapp.com',
      databaseURL: 'https://auth-e01e1.firebaseio.com',
      projectId: 'auth-e01e1',
      storageBucket: 'auth-e01e1.appspot.com',
      messagingSenderId: '10492590999'
    });

    firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
  }

  renderContent() {
  	switch (this.state.loggedIn) {
			case true:
				return (
					<View style={{flexDirection: 'row'}}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner />
		}
	}

  render() {
    return (
      <View>
        <Header headerText={"Authentication"}/>
				{this.renderContent()}
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
