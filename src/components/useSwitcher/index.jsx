'use client'

import React, { useState, useContext, createContext, useEffect } from 'react';

const SwitchContext = createContext();

export const useSwitcher = () => {
  return useContext(SwitchContext);
};

export const SwitchProvider = ({ children }) => {
  const defaultValue = false;
  const [switched, setSwitched] = useState(() => {
    const storeLang = localStorage.getItem("lang");
    return storeLang !== null ? JSON.parse(storeLang) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem("lang", JSON.stringify(switched));
  }, [switched]);

  const handleChangeSwitch = () => {
    setSwitched((prev) => !prev);
  };

  const values = {
    switched,
    handleChangeSwitch
  };

  return (
    <SwitchContext.Provider value={values}>
      { children }
    </SwitchContext.Provider>
  )

};