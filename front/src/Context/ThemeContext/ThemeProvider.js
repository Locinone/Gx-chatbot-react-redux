import React, {createContext, useEffect, useMemo, useState} from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {


	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.setAttribute('dark-mode', darkMode)
	}, [darkMode]);

	const changeTheme = () => {
		setDarkMode(!darkMode);
	}

	return (
		<ThemeContext.Provider value={{ darkMode, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
