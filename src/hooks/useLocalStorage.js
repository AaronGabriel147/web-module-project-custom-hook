import { useState } from "react";



const useLocalStorage = (key) => {

  // This grabs the localStorage key and sets it to state.
  const [storedValue, setStoredValue] = useState(() => window.localStorage.getItem(key))
  
  // Setter function. 
  const setValue = (value) => {

    // console.log('useLocalStorage.js: value = ', value)     // value logs true or false (same as 'darkMode' state in useDarkMode.js)

    setStoredValue(value);                                    // Sets 'value' Boolean to state.
    window.localStorage.setItem(key, JSON.stringify(value));  // Sets 'value' Boolean to localStorage.
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
















// ~~~~~~~~~~~~~ ORIGINAL BELOW WORKS ~~~~~~~~~~~~~~~~~~~~

// const useLocalStorage = (key, initialValue) => {

//   // console.log('initialValue', initialValue)
  
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;           // JSON.parse() parses everything inside of single qoutes.
    
//   });
  
//   // setter
//   const setValue = value => {
//     setStoredValue(value);                                    // Save state
//     window.localStorage.setItem(key, JSON.stringify(value));  // Save to local storage
//   };
//   return [storedValue, setValue];
// };

// export default useLocalStorage;