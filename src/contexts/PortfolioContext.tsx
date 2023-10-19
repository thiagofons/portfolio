import { createContext, useState } from "react";

type PortfolioProps = {
  children: any;
};

type PortfolioData = {
  darkTheme: boolean;
  setDarkTheme: (d: boolean) => void;
  openMenu: boolean;
  setOpenMenu: (o: boolean) => void;
  lang: string;
  setLang: (l: string) => void;
};

export const PortfolioContext = createContext<PortfolioData>({
  darkTheme: false,
  setDarkTheme: () => {},
  openMenu: false,
  setOpenMenu: () => {},
  lang: "en",
  setLang: () => {},
});

export const PortfolioProvider = (props: PortfolioProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <PortfolioContext.Provider
      value={{ darkTheme, setDarkTheme, openMenu, setOpenMenu, lang, setLang }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};
