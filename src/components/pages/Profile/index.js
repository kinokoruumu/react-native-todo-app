import React, {Component} from "react";
import { StyleSheet } from 'react-native'
import {Body, Content, Icon, Left, List, ListItem, Right, Switch} from "native-base";
import {Text} from "react-native";
export default class ProfilePage extends Component {
	render() {
		return (
			<Content style={styles.container}>
				<List>
					<ListItem icon>
						<Left>
							<Text>学籍番号</Text>
						</Left>
						<Body>
						<Text>ohs50062</Text>
						</Body>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Text>クラス記号</Text>
						</Left>
						<Body>
						<Text>IW-13A-727</Text>
						</Body>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Text>担任</Text>
						</Left>
						<Body>
						<Text>宮内 清臣</Text>
						</Body>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Text>出席番号</Text>
						</Left>
						<Body>
						<Text>16番</Text>
						</Body>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Text>氏名</Text>
						</Left>
						<Body>
						<Text>西川 和希</Text>
						</Body>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
				</List>
			</Content>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF'
	}
})
