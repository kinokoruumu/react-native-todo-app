import React, {Component} from 'react'
import {Text, StyleSheet, View} from "react-native";
import {Content, Tab, Tabs} from "native-base";
import Tasks from "../../organisms/Tasks";

export default class TasksPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<Tabs initialPage={0}>
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
