import React, { useEffect, useState } from "react";

const toggleStyles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontFamily: "var(--font-mono)",
    fontSize: "0.75rem",
    fontWeight: "400",
    letterSpacing: "0.04em",
    color: "var(--color-text-secondary)",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-sm)",
    padding: "0.35rem 0.75rem",
    cursor: "pointer",
    transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
    outline: "none",
};

export const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            style={toggleStyles}
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
        >
            {isDark ? "☽ dark" : "○ light"}
        </button>
    );
};
