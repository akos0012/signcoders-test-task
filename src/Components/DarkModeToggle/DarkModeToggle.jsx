import { useState, useEffect } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
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