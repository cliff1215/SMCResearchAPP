import React from 'react';
import StudyList from './StudyList';
import SeriesList from './SeriesList';

const ProjectStudyList = (props) => {
	return (
		<div className="project-studylist">
			<hr />
			<StudyList />
			<hr />
			<SeriesList />
		</div>
	);
};

export default ProjectStudyList;
