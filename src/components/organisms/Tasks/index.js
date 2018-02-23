import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import Task from "../../molecules/Task";
import {Content} from "native-base";

let tasks = [
	{
		task_id: 1,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-02-25 18:00"
	},
	{
		task_id: 2,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-02-05 18:00"
	},
	{
		task_id: 3,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-08-24 18:00"
	},
	{
		task_id: 4,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 5,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 6,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 7,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 8,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 9,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 10,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
	{
		task_id: 11,
		subject_name: "SV31",
		task_number: 1,
		task_name: "Linuxインストール",
		subject_instructor: "奥信 将人",
		submission_deadline: "2018-11-24 18:00"
	},
]

export default class Tasks extends Component {
	constructor(props) {
		super(props)
		this.state = {
			removed: false,
			scrollEnabled: true
		}
	}
	removeTask(taskId) {
		tasks = tasks.filter((task) => task.task_id !== taskId)
		this.setState({removed: true})
	}
	setScrollEnabled(state) {
		this.setState({scrollEnabled: state})
	}
	render() {
		const renderItems = tasks.map((task) => (
			<Task
				key={task.task_id}
				data={task}
				removeTask={(taskId) => this.removeTask(taskId)}
				setScrollEnabled={(state) => this.setScrollEnabled(state)}
				scrollEnabled={this.state.scrollEnabled}
			/>
		))
		return (
			<Content
				style={styles.container}
				scrollEnabled={this.state.scrollEnabled}
			>
				{renderItems}
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F2F1F1',
		paddingTop: 15,
	}
})
