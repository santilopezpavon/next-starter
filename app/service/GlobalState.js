import React, {useState} from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(false);
  const provider = {
    globalState, setGlobalState
  }
  return <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>;
};