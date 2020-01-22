import React, { createContext, useState } from 'react';

export const ActiveStudyContext = createContext();

const ActiveStudyContextProvider = (props) => {
	const [ activeStudyDbId, setActiveStudyDbId ] = useState(0);

	return (
		<ActiveStudyContext.Provider value={{ activeStudyDbId, setActiveStudyDbId }}>
			{props.children}
		</ActiveStudyContext.Provider>
	);
};

export default ActiveStudyContextProvider;
