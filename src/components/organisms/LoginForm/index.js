import React, {Component} from 'react'
import {Text, View, StyleSheet} from "react-native";
import TextField from "../../molecules/TextField";
import validate from "../../../helpers/validate";
import {Button} from "native-base";
import {Actions} from 'react-native-router-flux'

export default class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			emailError: "",
			password: "",
			passwordError: "",
		}
	}

	setErrorMessage(fieldName, value) {
		this.setState({
			[`${fieldName}Error`]: validate(fieldName, value)
		})
	}

	validate() {
		this.setErrorMessage('email', this.state.email)
		this.setErrorMessage('password', this.state.password)
	}

	login() {
		this.validate()
		setTimeout(() => {
			Actions.main({type: "reset" +
			""})
		}, 1000)
	}

	render() {
		return (
			<View>
				<View style={styles.textFieldContainer}>
					<TextField
						title="メールアドレス"
						onChangeText={value => {
							this.setState({email: value.trim()})
						}}
						error={this.state.emailError}
					/>
				</View>

				<View style={styles.textFieldContainer}>
					<TextField
						title="パスワード"
						onChangeText={value => {
							this.setState({password: value.trim()})
						}}
						isPassowrd
						error={this.state.passwordError}
					/>
				</View>

				<View style={{paddingTop: 50}}>
					<Button
						onPress={() => this.login()}
						primary
						full
					>
						<Text style={{color: '#FFF', fontSize: 18}}>ログイン</Text>
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
