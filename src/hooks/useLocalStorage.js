import { useState, useEffect } from "react";

export function getStorageValue(key, defaultValue) {
  if(typeof window !== "undefined") {
    const initial = JSON.parse(localStorage.getItem(key));
    return initial || defaultValue;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};