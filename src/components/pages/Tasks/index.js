import React, {Component} from 'react'
import {StyleSheet} from "react-native";
import {Tab, Tabs} from "native-base";
import {Actions} from 'react-native-router-flux'
import Tasks from "../../organisms/Tasks";
import TaskAddIcon from "../../atoms/TaskAddIcon";
import HeaderButton from "../../molecules/HeaderButton/index";

export default class TasksPage extends Component {
	constructor(props) {
		super(props)
	}

	static right = () => {
		return (
			<HeaderButton onPress={() => Actions.addTask()}>
				<TaskAddIcon/>
			</HeaderButton>
		)
	}

	render() {
		return (
			<Tabs initialPage={0} locked>
				<Tab heading="MY TASK">
					<Tasks/>
				</Tab>
				<Tab heading="COMP TASK">
					<Tasks/>
				</Tab>
			</Tabs>
		)
	}
}

const styles = StyleSheet.create({
})
