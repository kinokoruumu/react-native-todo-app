import React, {Component} from 'react'
import {Text, View, StyleSheet, Picker} from "react-native";
import Modal from 'react-native-modalbox';
import TextField from "../../molecules/TextField";
import validate from "../../../helpers/validate";
import {Button} from "native-base";
import {Actions} from 'react-native-router-flux'

export default class AddTaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			emailError: "",
		}
	}

	setErrorMessage(fieldName, value) {
		this.setState({
			[`${fieldName}Error`]: validate(fieldName, value)
		})
	}

	validate() {
		this.setErrorMessage('email', this.state.email)
	}

	render() {
		return (
			<View>
				<View style={styles.textFieldContainer}>
					<TextField
						title="課題No"
						onChangeText={value => {
							this.setState({email: value.trim()})
						}}
						error={this.state.emailError}
					/>
				</View>

				<View style={styles.textFieldContainer}>
					<TextField
						title="課題主題"
						onChangeText={value => {
							this.setState({email: value.trim()})
						}}
						error={this.state.emailError}
					/>
				</View>

				<View style={styles.textFieldContainer}>
					<TextField
						title="課題内容"
						onChangeText={value => {
							this.setState({email: value.trim()})
						}}
						error={this.state.emailError}
					/>
				</View>

				<View style={{paddingTop: 50}}>
					<Button
						onPress={() => Actions.pop()}
						primary
						full
					>
						<Text style={{color: '#FFF', fontSize: 18}}>追加する</Text>
					</Button>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textFieldContainer: {
		paddingVertical: 10,
	}
})
