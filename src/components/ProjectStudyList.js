import React, { useState } from 'react';
import { Row, Col } from 'antd';
import StudyList from './StudyList';
import SeriesList from './SeriesList';
import ImageRender from './ImageRender';
import PatientList from './PatientList';

const ProjectStudyList = (props) => {
	const [ activeStudyDbId, setActiveStudyDbId ] = useState(0);
	const [ activeSeriesDbId, setActiveSeriesDbId ] = useState(0);

	return (
		<div className="project-studylist">
			<Row gutter={10}>
				<Col span={4}>
					<PatientList />
				</Col>
				<Col span={20}>
					<StudyList setActiveStudyDbId={setActiveStudyDbId} />
					<Row gutter={10}>
						<Col span={18}>
							<SeriesList activeStudyDbId={activeStudyDbId} setActiveSeriesDbId={setActiveSeriesDbId} />
						</Col>
						<Col span={6}>
							<ImageRender activeSeriesDbId={activeSeriesDbId} />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default ProjectStudyList;
