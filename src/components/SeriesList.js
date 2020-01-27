import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const initSeriesList = (dbSeries) => {
	const series = [];

	for (const se of dbSeries) {
		series.push({
			key: se.id,
			id: se.id,
			body_part: se.body_part,
			comment: se.comment,
			created_at: se.created_at,
			images: se.images.length,
			modality: se.modality,
			protocol_name: se.protocol_name,
			series_date: se.series_date,
			series_description: se.series_description,
			series_instance_uid: se.series_instance_uid,
			series_number: se.series_number,
			series_time: se.series_time,
			updated_at: se.updated_at,
			view_order: se.view_order
		});
	}
	return series;
};

const SeriesList = (props) => {
	const { activeStudyDbId, setActiveSeriesDbId } = props;
	const [ series, setSeries ] = useState([]);

	const tableCols = [
		{ title: 'Series number', dataIndex: 'series_number' },
		{ title: 'Series date', dataIndex: 'series_date' },
		{ title: 'Series time', dataIndex: 'series_time' },
		{ title: 'Modality', dataIndex: 'modality' },
		{ title: 'Body part', dataIndex: 'body_part' },
		{ title: 'Series desc.', dataIndex: 'series_description' },
		{ title: 'Protocol name', dataIndex: 'protocol_name' },
		{ title: 'Images', dataIndex: 'images' }
		// { title: 'Comment', dataIndex: 'comment' }
	];

	useEffect(
		() => {
			axios
				.get(`http://localhost:5000/api/series/${activeStudyDbId}`)
				.then((res) => setSeries(initSeriesList(res.data)))
				.catch((err) => console.log(err));
		},
		[ activeStudyDbId ]
	);
	return (
		<Table
			dataSource={series}
			columns={tableCols}
			onRow={(record, rowIndex) => {
				return {
					onClick: (event) => setActiveSeriesDbId(record.key)
				};
			}}
		/>
	);
};

export default SeriesList;
