import React, { useContext } from 'react';
import { Table } from 'antd';
import { StudyContext } from '../contexts/StudyContext';
import { ActiveStudyContext } from '../contexts/ActiveStudyContext';

const StudyList = (props) => {
	const { studies } = useContext(StudyContext);
	const { setActiveStudyDbId } = useContext(ActiveStudyContext);

	const tableCols = [
		{ title: 'ID', dataIndex: 'pat_id', key: 'pat_id' },
		{ title: 'Name', dataIndex: 'pat_name', key: 'pat_name' },
		{ title: 'Sex', dataIndex: 'pat_sex', key: 'pat_sex' },
		{ title: 'Study date', dataIndex: 'study_date', key: 'study_date' },
		{ title: 'Study time', dataIndex: 'study_time', key: 'study_time' },
		{ title: 'Modality', dataIndex: 'modality', key: 'modality' },
		{ title: 'Body part', dataIndex: 'body_part', key: 'body_part' },
		{ title: 'Study desc.', dataIndex: 'study_description', key: 'study_description' },
		{ title: 'Series', dataIndex: 'series', key: 'series' },
		{ title: 'Images', dataIndex: 'images', key: 'images' },
		{ title: 'Manufacturer', dataIndex: 'manufacturer', key: 'manufacturer' },
		{ title: 'Comment', dataIndex: 'comment', key: 'comment' }
	];
	return (
		<Table
			dataSource={studies}
			columns={tableCols}
			onRow={(record, rowIndex) => {
				return {
					onClick: (event) => {
						setActiveStudyDbId(record.key);
					}
				};
			}}
		/>
	);
};

export default StudyList;
