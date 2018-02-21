import React from 'react'
import {View} from "react-native";
import {Input, Item} from "native-base";
import ErrorMessage from "../../atoms/ErrorMessage";

const TextField = props => (
	<View>
		<Item>
			<Input
				placeholder={props.title}
				onChangeText={props.onChangeText}
				secureTextEntry={props.isPassowrd}
			/>
		</Item>
		{props.error !== "" &&
			<ErrorMessage text={props.error}/>
		}
	</View>
)

export default TextField
