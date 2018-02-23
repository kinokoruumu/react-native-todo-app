import React from 'react';
import {Container} from "native-base";
import {Modal, Router, Scene, Stack, Tabs} from "react-native-router-flux";
import LoginPage from "./src/components/pages/Login";
import TasksPage from "./src/components/pages/Tasks";
import TaskPage from "./src/components/pages/Task";
import AddTaskPage from "./src/components/pages/AddTask/index";
import TabIcon from "./src/components/atoms/TabIcon";
import ProfilePage from "./src/components/pages/Profile";

const App = () => (
	<Container>
		<Router>
			<Modal
				key="modal"
				hideNavBar
			>
				<Stack key="root">
					<Scene key="login" component={LoginPage} title="Login"/>
				</Stack>
				<Tabs key="main" initial>
					<Stack key="tasks" icon={TabIcon} iconName="tasks">
						<Scene key="tasksPage" component={TasksPage} title="HALApplication"/>
						<Scene key="taskPage" component={TaskPage} title="HALApplication"/>
					</Stack>
					<Scene key="profile" initial icon={TabIcon} iconName="profile" component={ProfilePage} title="Profile"/>
				</Tabs>
				<Scene key="addTask" component={AddTaskPage} title="課題追加" hideNavBar={false}/>
			</Modal>
		</Router>
	</Container>
);

export default App

