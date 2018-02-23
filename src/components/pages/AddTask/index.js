import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Content, H1} from "native-base";
import {Actions} from 'react-native-router-flux';
import AddTaskForm from "../../organisms/AddTaskForm";
import HeaderButton from "../../molecules/HeaderButton";
import TimesButton from "../../atoms/TimesButton";

export default class AddTaskPage extends React.Component {
	static left = () => null
	static right = () => (
		<HeaderButton onPress={() => Actions.pop()}>
			<TimesButton/>
		</HeaderButton>
	)

	render() {
		return (
			<Content style={styles.container}>
				<H1 style={styles.titleContainer}>課題追加</H1>
				<AddTaskForm/>
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
