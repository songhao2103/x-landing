export const LOCAL_STORAGE_KEY = {
  LANGUAGE: 'language',
}

export const localStorageUtil = {
  get<T>(key: string): T | null {
    if (typeof window === 'undefined') return null
    try {
      const value = localStorage.getItem(key)
      return value ? (JSON.parse(value) as T) : null
    } catch {
      return null
    }
  },

  set<T>(key: string, value: T) {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key: string) {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  },

  removeAll() {
    localStorage.clear()
  },
}
