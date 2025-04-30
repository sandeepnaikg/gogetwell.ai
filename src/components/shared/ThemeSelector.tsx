import React from 'react'
import { useThemeStore } from '@/store/themeStore'

const ThemeSelector = () => {
  const { specialty, setSpecialty } = useThemeStore()

  return (
    <select value={specialty} onChange={(e) => setSpecialty(e.target.value as any)} className="text-black p-2 rounded">
      <option value="default">Default</option>
      <option value="theme1">Organ Transplant</option>
      <option value="theme2">Cosmetic Surgery</option>
    </select>
  )
}

export default ThemeSelector