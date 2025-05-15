import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    theme:localStorage.getItem("volang-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("volang-theme", theme);
        set({ theme })
    },
}))