import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, PanResponder, Animated} from "react-native";
import {Body, Card, CardItem, H2, H3} from "native-base";
import {Actions} from 'react-native-router-flux';
import clamp from 'clamp';
import moment from 'moment'
import ArrowButton from "../../atoms/ArrowButton";

const dayOfTheWeek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."]
const SWIPE_THRESHOLD = 160;

export default class Task extends Component {
	constructor(props: any) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY(),
			position: new Animated.Value(0),
		};
	}

	componentWillMount() {
		this.createPanResponder();
	}

	createPanResponder = () => {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dx) > 0,

			onPanResponderGrant: (e, gestureState) => {
				this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
				this.state.pan.setValue({x: 0, y: 0});
			},

			onPanResponderMove: (e, gestureState) => {
				const {dx} = gestureState
				if (dx >= 0) {
					this.state.pan.setValue({x: dx, y: 0})
					// if (this.props.scrollEnabled) this.props.setScrollEnabled(false)
				}
			},

			onPanResponderRelease: (e, {vx, vy, dx, dy}) => {
				this.state.pan.flattenOffset();
				let velocity;

				if (vx >= 0) {
					velocity = clamp(vx, 3, 5);
				} else if (vx < 0) {
					velocity = clamp(vx * -1, 3, 5) * -1;
				}
				// this.props.setScrollEnabled(true)

				const moveX = Math.abs(dx) > Math.abs(dy);
				if (this.props.scroll) {
					if (moveX) this.props.scroll(false);
					else this.props.scroll(true);
				}

				if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {
					Animated.decay(this.state.pan, {
						velocity: {x: 5, y: vy},
						deceleration: 0.98
					}).start(() => {
						this.props.removeTask(this.props.data.task_id)
					})
				} else {
					Animated.timing(this.state.pan, {
						toValue: {x: 0, y: 0},
						duration: 200
					}).start()
				}
			},
			onShouldBlockNativeResponder: (event, gestureState) => false,
			onPanResponderTerminationRequest: () => false,
		});
	};

	onLayoutEvent(event) {
		const { height } = event.nativeEvent.layout;
	}

	render() {
		console.log(this.props.scroll)
		const {task_id, subject_name, task_number, task_name, subject_instructor, submission_deadline} = this.props.data
		return (
			<Animated.View
				style={{transform: this.state.pan.getTranslateTransform()}}
				{...this._panResponder.panHandlers}
			>
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={() => Actions.taskPage({title: `${subject_name} ${task_name}`,taskId: task_id})}
					onLayout={event => this.onLayoutEvent(event)}
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
									<Text style={{position: 'absolute', top: 0, left: 4, color: '#FFF', fontSize: 27, fontWeight: 'bold'}}>
										{moment(submission_deadline).format('M')}
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
										{moment(submission_deadline).format('D')}
									</Text>
								</View>
								<View>
									<Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>
										{`(${dayOfTheWeek[moment(submission_deadline).day()]})`}
									</Text>
								</View>
							</View>
							<View>
								<Text>
									<Text style={[styles.whiteText, {fontSize: 29, fontWeight: 'bold'}]}>
										{moment(submission_deadline).diff(moment(), 'day')}
									</Text>
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
										<H3 style={styles.whiteText}>{subject_name}</H3>
									</View>
									<View style={{paddingLeft: 10}}>
										<H3>{`No.${task_number}`}</H3>
									</View>
								</View>
							</CardItem>
							<CardItem>
								<Body>
									<H2>{task_name}</H2>
									<Text>納期レビューの実施</Text>
								</Body>
							</CardItem>
							<CardItem footer>
								<H3>{`担当: ${subject_instructor}`}</H3>
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
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	whiteText: {
		color: '#FFF'
	}
})