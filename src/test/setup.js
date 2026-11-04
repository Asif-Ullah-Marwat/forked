import '@testing-library/jest-dom/vitest'
const storage = new Map()

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key) => storage.get(String(key)) ?? null,
    setItem: (key, value) => storage.set(String(key), String(value)),
    removeItem: (key) => storage.delete(String(key)),
    clear: () => storage.clear(),
  },
})
