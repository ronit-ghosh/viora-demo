import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeToggle = () => {
    const { setTheme } = useTheme()
    return (
        <div className="flex gap-3 border dark:border-neutral-500 border-neutral-900 w-20 h-8 justify-center items-center rounded-xl">
            <Sun className="h-5 w-5 cursor-pointer hover:bg-ne" onClick={() => setTheme('light')} />
            <Moon className="h-5 w-5 cursor-pointer" onClick={() => setTheme('dark')} />
        </div>
    )
}

export default ThemeToggle
