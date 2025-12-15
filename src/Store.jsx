import { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // 1. CHANGED DEFAULT TO 'midnight'
  const [theme, setTheme] = useState('concrete');

  const cycleTheme = () => {
    // Themes: Midnight (Black/Gold), blueprint (White/Blue), Concrete (Grey/Orange)
    const themes = ['concrete', 'blueprint', 'midnight'];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);