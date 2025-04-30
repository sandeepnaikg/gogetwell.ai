import React from 'react'
import { useThemeStore } from '@/store/themeStore'

const themes = [
  { id: 'default', label: 'Default Theme' },
  { id: 'theme1', label: 'Organ Transplant Theme' },
  { id: 'theme2', label: 'Cosmetic Surgery Theme' },
]

const ThemePage = () => {
  const { specialty, setSpecialty } = useThemeStore()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Select a Theme</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div key={theme.id} className={`p-4 border rounded cursor-pointer ${specialty === theme.id ? 'bg-primary text-white' : 'bg-white'}`} onClick={() => setSpecialty(theme.id as any)}>
            <h3 className="text-lg font-semibold">{theme.label}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThemePage