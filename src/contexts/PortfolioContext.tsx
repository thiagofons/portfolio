import { createContext, useState } from "react";

type PortfolioProps = {
  children: any
}

type PortfolioData = {
  darkTheme: boolean;
  setDarkTheme: (d: boolean) => void;
  openMenu: boolean;
  setOpenMenu: (o: boolean) => void;
}

export const PortfolioContext = createContext<PortfolioData>({
  darkTheme: false,
  setDarkTheme: () => {},
  openMenu: false,
  setOpenMenu: () => {}
});

export const PortfolioProvider = (props: PortfolioProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <PortfolioContext.Provider value={{ darkTheme, setDarkTheme, openMenu, setOpenMenu }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
