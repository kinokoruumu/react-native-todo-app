import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "../../organisms/LoginForm";
import {Container, Content, H1} from "native-base";

export default class LoginPage extends React.Component {
	render() {
		return (
			<Content style={styles.container}>
				<H1 style={styles.titleContainer}>LOGIN</H1>
				<LoginForm/>
			</Content>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#FFF'
	},
	titleContainer: {
		paddingVertical: 20,
	}
})
