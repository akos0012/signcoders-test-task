import { useState, useEffect } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("isDarkMode")) || false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <div>
            <button
                className="toggle-button"
                onClick={() => setIsDarkMode(prev => !prev)}
            >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
};

export default DarkModeToggle;