import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
					<Input
					label="Email"
					placeholder="email@gmail.com"/>
				</CardSection>

				<CardSection>
					<Input
					secureTextEntry
					label="Password"
					placeholder="password"/>
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
});

export default LoginForm;