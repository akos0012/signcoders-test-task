import { useState, useEffect } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("isDarkMode")) ?? false;
    });

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <div>
            <button
                className="toggle-button"
                onClick={() => setIsDarkMode(prev => !prev)}
            >
                {isDarkMode ? "☀ Light" : "🌙 Dark"}
            </button>
        </div>
    );
};

export default DarkModeToggle;