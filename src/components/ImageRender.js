import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const imgStyle = {
	width: '100%',
	height: '100%',
	objectFit: 'contain',
	background: 'black'
};

const ImageRender = (props) => {
	const { activeSeriesDbId } = props;
	const [ currentSeriesDbId, setCurrentSereisDbId ] = useState(-1);
	const [ currentImageIdx, setCurrentImageIdx ] = useState(-1);
	const [ images, setImages ] = useState([]);

	const imgRef = useRef(null);

	useEffect(
		() => {
			if (activeSeriesDbId !== currentSeriesDbId) {
				setCurrentSereisDbId(activeSeriesDbId);
				setCurrentImageIdx(0);
			}
		},
		[ activeSeriesDbId, currentSeriesDbId ]
	);

	useEffect(
		() => {
			axios
				.get(`http://localhost:5000/api/images/${currentSeriesDbId}`)
				.then((res) => {
					setImages(res.data);
				})
				.catch((err) => console.log(err));
		},
		[ currentSeriesDbId ]
	);

	useEffect(
		() => {
			if (images.length === 0) return;

			const currentImage = images[currentImageIdx];
			axios
				.get(`http://localhost:5000/api/render/${currentImage.id}`, {
					responseType: 'arraybuffer',
					params: {
						path: currentImage.path + '/' + currentImage.file_name,
						center: currentImage.window_center,
						width: currentImage.window_width
					}
				})
				.then((res) => {
					imgRef.current.src = `data:${res.headers['content-type']};base64, ${btoa(
						new Uint8Array(res.data).reduce((data, byte) => {
							return data + String.fromCharCode(byte);
						}, '')
					)}`;
				})
				.catch((err) => console.log(err));
		},
		[ currentImageIdx, images ]
	);

	return (
		<div className="image-render">
			<img
				src="./logo512.png"
				alt="renderer"
				style={imgStyle}
				ref={imgRef}
				draggable="false"
				onWheel={(e) => {
					const delta = e.deltaY < 0 ? 1 : -1;
					let newIdx = currentImageIdx + delta;
					if (newIdx < 0) newIdx = 0;
					else if (newIdx >= images.length) newIdx = images.length - 1;

					setCurrentImageIdx(newIdx);
					console.log(newIdx);
				}}
			/>
		</div>
	);
};

export default ImageRender;
