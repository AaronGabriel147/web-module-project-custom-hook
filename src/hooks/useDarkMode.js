// import React from 'react';
import { useLocalStorage } from './useLocalStorage';



export const useDarkMode = (key) => {

    const [darkMode, setDarkMode] = useLocalStorage(key)

    return [darkMode, setDarkMode];
}