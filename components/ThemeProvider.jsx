'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeCtx = createContext({ isDark: true, toggle: () => { } })

export function useTheme() {
    return useContext(ThemeCtx)
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const saved = localStorage.getItem('pts-theme') || 'dark'
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
    }, [])

    const toggle = () => {
        setTheme(prev => {
            const next = prev === 'dark' ? 'light' : 'dark'
            localStorage.setItem('pts-theme', next)
            document.documentElement.setAttribute('data-theme', next)
            return next
        })
    }

    return (
        <ThemeCtx.Provider value={{ isDark: theme === 'dark', toggle, theme }}>
            {children}
        </ThemeCtx.Provider>
    )
}