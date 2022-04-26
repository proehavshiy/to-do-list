import { useState, useEffect } from "react"

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let result;
    if (localStorage.getItem(key)) {
      result = JSON.parse(localStorage.getItem(key))
    } else {
      result = defaultValue
    }
    return result
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}