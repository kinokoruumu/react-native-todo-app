import React, {Component} from 'react'
import {Image, View} from "react-native";

export default class TabIcon extends Component {
	renderIcon = (iconName, focused) => {
		let src;

		switch (iconName) {
			case 'tasks':
				src = focused ? require("./img/Tasks.png") : require("./img/Tasks.png");
				break;
			case 'profile':
				src = focused ? require("./img/Profile.png") : require("./img/Profile.png");
				break;
			default:
				src = null;
				break;
		}

		return <Image source={src} />
	}

	render() {
		const { iconName, focused } = this.props;
		return (
			<View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
				{ this.renderIcon(iconName, focused) }
			</View>
		)
	}
}