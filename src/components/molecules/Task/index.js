import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Body, Card, CardItem, H2, H3} from "native-base";
import moment from 'moment'
import ArrowButton from "../../atoms/ArrowButton";

const dayOfTheWeek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]

export default class Task extends Component {
	render() {
		return (
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => console.log("show detail")}
			>
				<Card style={{
					flexDirection: 'row',
					backgroundColor: '#FFF',
				}}>
					<View style={{
						flex: 1,
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: 8,
						backgroundColor: '#1F3A9D',
					}}>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-end'
						}}>
							<View style={{
								position: 'relative',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								width: 60,
								height: 55,
							}}>
								<Text style={{position: 'absolute', top: 0, left: 8, color: '#FFF', fontSize: 27, fontWeight: 'bold'}}>
									{moment('2018-02-18').format('M')}
								</Text>
								<View style={{
									position: 'absolute',
									top: -5,
									left: 25,
									width: 2,
									height: 65,
									backgroundColor: '#FFF',
									transform: [{ rotate: '45deg'}]
								}}/>
								<Text style={{position: 'absolute', top: 22, left: 27, color: '#FFF', fontSize: 27, fontWeight: 'bold'}}>
									{moment('2018-02-18').format('D')}
								</Text>
							</View>
							<View>
								<Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>
									{`(${dayOfTheWeek[moment('2018-02-18').day()]})`}
								</Text>
							</View>
						</View>
						<View>
							<Text>
								<Text style={[styles.whiteText, {fontSize: 29, fontWeight: 'bold'}]}>4</Text>
								<Text style={[styles.whiteText, {fontSize: 20}]}>days</Text>
							</Text>
							<Text style={[styles.whiteText, {fontSize: 14}]}>remaining</Text>
						</View>
					</View>
					<View style={{
						flex: 2.5,
						paddingBottom: 15,
					}}>
						<CardItem header>
							<View style={{alignItems: 'center', flexDirection: 'row'}}>
								<View style={{backgroundColor: '#D0024A', borderRadius: 15, paddingVertical: 4, paddingHorizontal: 8}}>
									<H3 style={styles.whiteText}>IW32</H3>
								</View>
								<View style={{paddingLeft: 10}}>
									<H3>No.09</H3>
								</View>
							</View>
						</CardItem>
						<CardItem>
							<Body>
								<H2>納期レビュー</H2>
								<Text>納期レビューの実施</Text>
							</Body>
						</CardItem>
						<CardItem footer>
							<H3>担当: 山田 忠明</H3>
						</CardItem>

						<View style={{
							position: 'absolute',
							right: 15,
							bottom: 15,
						}}>
							<ArrowButton/>
						</View>
					</View>
				</Card>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	whiteText: {
		color: '#FFF'
	}
})