import { useState, useEffect } from "react"

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const toParse = localStorage.getItem(key) || defaultValue
    return JSON.parse(toParse)
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}