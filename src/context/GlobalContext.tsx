import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [data, setData] = useState([]);

	return (
		<GlobalContext.Provider value={{ data, setData }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
