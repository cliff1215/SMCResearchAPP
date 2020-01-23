import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'antd';
import { ActiveStudyContext } from '../contexts/ActiveStudyContext';
import axios from 'axios';

const initStudyList = (dbStudies) => {
	const studies = [];

	for (const dbstudy of dbStudies) {
		studies.push({
			key: dbstudy.id,
			id: dbstudy.id,
			accession_number: dbstudy.accession_number,
			body_part: dbstudy.body_part,
			comment: dbstudy.comment,
			created_at: dbstudy.created_at,
			images: dbstudy.images.length,
			manufacturer: dbstudy.manufacturer,
			modality: dbstudy.modality,
			pat_db_id: dbstudy.patient.id,
			pat_id: dbstudy.patient.pat_id,
			pat_name: dbstudy.patient.pat_name,
			pat_sex: dbstudy.patient.pat_sex,
			pat_birth_date: dbstudy.patient.pat_birth_date,
			patient_age: dbstudy.patient_age,
			series: dbstudy.series.length,
			study_date: dbstudy.study_date,
			study_description: dbstudy.study_description,
			study_id: dbstudy.study_id,
			study_instance_uid: dbstudy.study_instance_uid,
			study_time: dbstudy.study_time,
			updated_at: dbstudy.updated_at
		});
	}
	return studies;
};

const StudyList = (props) => {
	const { setActiveStudyDbId } = useContext(ActiveStudyContext);
	const [ studies, setStudies ] = useState([]);

	const tableCols = [
		{ title: 'ID', dataIndex: 'pat_id' },
		{ title: 'Name', dataIndex: 'pat_name' },
		{ title: 'Sex', dataIndex: 'pat_sex' },
		{ title: 'Study date', dataIndex: 'study_date' },
		{ title: 'Study time', dataIndex: 'study_time' },
		{ title: 'Modality', dataIndex: 'modality' },
		{ title: 'Body part', dataIndex: 'body_part' },
		{ title: 'Study desc.', dataIndex: 'study_description' },
		{ title: 'Series', dataIndex: 'series' },
		{ title: 'Images', dataIndex: 'images' },
		{ title: 'Manufacturer', dataIndex: 'manufacturer' },
		{ title: 'Comment', dataIndex: 'comment' }
	];

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/studies/')
			.then((res) => setStudies(initStudyList(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Table
			dataSource={studies}
			columns={tableCols}
			onRow={(record, rowIndex) => {
				return {
					onClick: (event) => setActiveStudyDbId(record.key)
				};
			}}
		/>
	);
};

export default StudyList;
