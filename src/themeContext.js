import React, { createContext, useState, useContext } from "react";

// 创建一个上下文来管理主题
const ThemeContext = createContext();

// 创建一个自定义 Hook 来方便访问主题和切换函数
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // 使用 useState 来管理当前的主题
  const [currentTheme, setCurrentTheme] = useState("light");

  // 切换主题的函数
  const toggleTheme = (checked) => {
    setCurrentTheme(checked ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
