import React from 'react';
import './App.css';
import ProjectStudyList from './components/ProjectStudyList';
import ActiveStudyContextProvider from './contexts/ActiveStudyContext';

function App() {
	return (
		<div className="App">
			<ActiveStudyContextProvider>
				<ProjectStudyList />
			</ActiveStudyContextProvider>
		</div>
	);
}

export default App;
