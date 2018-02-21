import React, {Component} from 'react'
import Task from "../../molecules/Task";
import {Content} from "native-base";

export default class Tasks extends Component {
	render() {
		return (
			<Content style={{backgroundColor: '#F2F1F1'}}>
				<Task/>
				<Task/>
				<Task/>
				<Task/>
			</Content>
		)
	}
}