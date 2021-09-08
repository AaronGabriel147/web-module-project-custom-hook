// import React from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key) => {
    
    
    const [darkMode, setDarkMode] = useLocalStorage(key)   //`useLocalStorage` and pass in the key you want to use to store to indicate whether or not dark mode is enabled.
    
    console.log(darkMode) // This is the Boolean that toggles.

    return [darkMode, setDarkMode];

}


export default useDarkMode;