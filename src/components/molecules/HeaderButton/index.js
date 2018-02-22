import React from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native'

const HeaderButton = (props) => (
	<TouchableOpacity
		onPress={() => props.onPress()}
	>
		<View style={styles.buttonContainer}>
			{props.children}
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	buttonContainer: {
		paddingHorizontal: 20,
	}
})

export default HeaderButton
