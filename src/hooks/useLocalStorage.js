import { useState } from "react";




const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
export default useLocalStorage;


// !!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    

// const useLocalStorage = (key, initialValue) => {
  
//   const [storedValue, setStoredValue] = useState(() => {

 
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue; // JSON.parse() parses everything inside of single qoutes. 

//   });

//   // Setter.
//   const setValue = value => {

//     setStoredValue(value);                                   // Save state
//     window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage
//   };

//   return [storedValue, setValue];

// };

// export default useLocalStorage;