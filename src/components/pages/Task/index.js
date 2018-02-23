import React, {Component} from 'react'
import {Text, StyleSheet, View, Dimensions} from "react-native";
import {Content, List, ListItem} from "native-base";
import moment from 'moment'

const dayOfTheWeek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]
const task = {
	task_id: 1,
	subject_name: "SV31",
	task_number: "1",
	task_name: "Linuxインストール",
	task_content: "Linuxのインストールマニュアルを作成し、pdf書き出し後課題サーバーの01フォルダに提出",
	subject_instructor: "奥信 将人",
	submission_deadline: "2018-02-25 18:00",
	subject_committee_members: [
		{
			name: "大塚",
		},
		{
			name: "西川",
		}
	],
}

export default class TaskPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {task_id, subject_name, task_number, task_name, task_content, subject_instructor, submission_deadline, subject_committee_members} = task
		return (
			<Content style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.whiteText}>
						<Text style={styles.largeText}>{moment(submission_deadline).format('M/D')}</Text>
						<Text style={styles.smallText}>{`(${dayOfTheWeek[moment(submission_deadline).day()]})`}</Text>
						<Text style={styles.smallText}>{` ${moment(submission_deadline).format('HH:mm')}までに提出`}</Text>
					</Text>
					<Text style={styles.whiteText}>
						<Text style={styles.largeText}>
							{moment(submission_deadline).diff(moment(), 'day')}
						</Text>
						<Text style={styles.smallText}>days remaining</Text>
					</Text>
				</View>
				<List>
					<ListItem itemDivider>
						<Text>詳細情報</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>科目記号</Text>
						</View>
						<Text>{subject_name}</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>課題No.</Text>
						</View>
						<Text>{task_number.padStart(2, "0")}</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>課題主題</Text>
						</View>
						<Text>{task_name}</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>課題内容</Text>
						</View>
						<View style={styles.listContent}>
							<Text style={styles.listContentText}>{task_content}</Text>
						</View>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>担当教官</Text>
						</View>
						<Text>{subject_instructor}</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>課題委員</Text>
						</View>
						<Text>{subject_committee_members.map((member) => member.name).join(", ")}</Text>
					</ListItem>
					<ListItem style={styles.list}>
						<View style={styles.listTitle}>
							<Text>備考</Text>
						</View>
						<Text>特になし</Text>
					</ListItem>
				</List>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
	},
	header: {
		paddingHorizontal: 15,
		paddingTop: 40,
		paddingBottom: 20,
		backgroundColor: '#1F3A9D',
	},
	list: {
		flexDirection: 'row',
	},
	listTitle: {
		width: 100,
	},
	listContent: {
		width: Dimensions.get('window').width - 120,
	},
	listContentText: {
		lineHeight: 20
	},
	whiteText: {
		color: '#FFF'
	},
	largeText: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	smallText: {
		fontSize: 16,
		fontWeight: 'bold'
	}
})
