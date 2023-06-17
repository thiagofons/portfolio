import { createContext, useContext, useState } from "react";

type PropsNav = {
  children: any
}

export type NavContent = {
  page: string
  setPage: (p: string) => void
}

export const NavContext = createContext<NavContent>({
  page: "",
  setPage: () => {}
});

export const NavProvider = (props: PropsNav) => {
  const [page, setPage] = useState("home");

  return (
    <NavContext.Provider value={{page, setPage}}>
      {props.children}
    </NavContext.Provider>
  )
};