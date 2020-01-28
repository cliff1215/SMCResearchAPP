import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Badge } from 'antd';

const PatientList = (props) => {
	const [ patients, setPatients ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/patients/')
			.then((res) => setPatients(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<List
			className="patient-list"
			header={
				<div>
					Patients{' '}
					<Badge count={patients.length} style={{ backgroundColor: '#52c41a', marginLeft: '.5em' }} />
				</div>
			}
			itemLayout="horizontal"
			dataSource={patients}
			renderItem={(item) => (
				<List.Item key={item.id}>
					<List.Item.Meta
						title={
							<div style={{ marginLeft: '1em' }}>
								{item.pat_name}
								<Badge
									count={item.studies.length}
									style={{
										backgroundColor: '#fff',
										color: '#999',
										boxShadow: '0 0 0 1px #d9d9d9 inset',
										marginLeft: '.5em'
									}}
								/>
							</div>
						}
						description={
							<div style={{ marginLeft: '1em' }}>
								{item.pat_id}, {item.pat_sex}/{item.pat_birth_date}
							</div>
						}
					/>
				</List.Item>
			)}
		/>
	);
};

export default PatientList;
