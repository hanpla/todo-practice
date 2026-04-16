// TODO: useState, useEffect를 import 하세요

import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // TODO: state를 선언하세요
  // HINT: 초기값을 설정할 때 localStorage에 이미 저장된 데이터가 있는지 확인하세요
  // HINT: useState의 초기값으로 함수를 전달하면 최초 1회만 실행됩니다 (lazy initialization)
  // HINT: localStorage.getItem()으로 데이터를 읽고, JSON.parse()로 파싱하세요
  // HINT: 저장된 데이터가 없으면 initialValue를 사용하세요

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);

      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error(error);

      return initialValue;
    }
  });

  // TODO: state가 변경될 때마다 localStorage에 저장하세요
  // HINT: useEffect를 사용하세요
  // HINT: localStorage.setItem()과 JSON.stringify()를 활용하세요
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);

      localStorage.removeItem(key);
    }
  }, [storedValue]);

  // TODO: [storedValue, setStoredValue] 형태로 반환하세요 (useState와 동일한 인터페이스)
  return [storedValue, setStoredValue];
}
