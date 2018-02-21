import React from 'react'
import {View, Text, StyleSheet} from "react-native";

const ErrorMessage = props => (
	<View style={styles.errorMessageContainer}>
		<Text style={styles.errorMessageText}>{props.text}</Text>
	</View>
)

const styles = StyleSheet.create({
	errorMessageContainer: {
		padding: 10,
	},
	errorMessageText: {
		color: 'red',
	}
})

export default ErrorMessage
