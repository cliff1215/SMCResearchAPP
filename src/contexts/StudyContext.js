import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const StudyContext = createContext();

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

const studyReducer = (studies, action) => {
	switch (action.type) {
		case 'INIT_STUDIES':
			return initStudyList(action.payload);
		default:
			return studies;
	}
};

const StudyContextProvider = (props) => {
	const [ studies, dispatch ] = useReducer(studyReducer, []);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/studies/')
			.then((res) => dispatch({ type: 'INIT_STUDIES', payload: res.data }))
			.catch((err) => console.log(err));
	}, []);

	return <StudyContext.Provider value={{ studies, dispatch }}>{props.children}</StudyContext.Provider>;
};

export default StudyContextProvider;
