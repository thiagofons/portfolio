import { createContext, useState } from "react";

type ThemeProps = {
  children: any
}

type ThemeData = {
  darkTheme: boolean;
  setDarkTheme: (d: boolean) => void;
}

export const ThemeContext = createContext<ThemeData>({
  darkTheme: false,
  setDarkTheme: () => {}
});

export const ThemeProvider = (props: ThemeProps) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
