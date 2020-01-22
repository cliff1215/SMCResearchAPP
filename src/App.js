import React from 'react';
import './App.css';
import StudyContextProvider from './contexts/StudyContext';
import ProjectStudyList from './components/ProjectStudyList';
import ActiveStudyContextProvider from './contexts/ActiveStudyContext';

function App() {
	return (
		<div className="App">
			<ActiveStudyContextProvider>
				<StudyContextProvider>
					<ProjectStudyList />
				</StudyContextProvider>
			</ActiveStudyContextProvider>
		</div>
	);
}

export default App;
