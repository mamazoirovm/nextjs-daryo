 "use client";
// import { useEffect, useState } from "react";
// const useDarkMode = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;

//       localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
//       return newMode;
//     });
//   };

//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "enabled") {
//       setIsDarkMode(true);
//     }
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   return { isDarkMode, toggleDarkMode };
// };

// export default useDarkMode;
