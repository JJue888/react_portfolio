import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
        >{isDark ? "dark" : "light"}</button>
    );
};