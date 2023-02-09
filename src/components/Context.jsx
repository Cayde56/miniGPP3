import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export function ContextProvider({children}) {
  const [urls, setUrls] = useState([])

  return <Context.Provider value={{
    urls,
    setUrls
  }}>{children}</Context.Provider>;
}
