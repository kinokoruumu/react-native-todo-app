import React, {Component} from 'react'
import {View, StyleSheet, Image} from "react-native";

export default class ArrowButton extends Component {
	render() {
		return (
				<View style={{
					width: 34,
					height: 34,
					backgroundColor: '#FC2357',
					borderRadius: 17,
					overflow: 'hidden',
				}}>
					<Image source={require("./img/ArrowButton.png")}/>
				</View>
		)
	}
}

const styles = StyleSheet.create({
})