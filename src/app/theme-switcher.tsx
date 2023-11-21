'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components'

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  function handleSwitchTheme() {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <Button
      variant="ghost"
      className="border border-zinc-700/20 dark:border-zinc-50"
      onClick={handleSwitchTheme}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
