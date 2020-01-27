import React, { useState } from 'react';
import { Row, Col } from 'antd';
import StudyList from './StudyList';
import SeriesList from './SeriesList';
import ImageRender from './ImageRender';

const ProjectStudyList = (props) => {
	const [ activeSeriesDbId, setActiveSeriesDbId ] = useState(0);

	return (
		<div className="project-studylist">
			<StudyList />
			<Row>
				<Col span={18}>
					<SeriesList setActiveSeriesDbId={setActiveSeriesDbId} />
				</Col>
				<Col span={6}>
					<ImageRender activeSeriesDbId={activeSeriesDbId} />
				</Col>
			</Row>
		</div>
	);
};

export default ProjectStudyList;
