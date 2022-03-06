import React from 'react';

type AppContext = {};

const defaultValue: AppContext = {};

const appContext = React.createContext<AppContext>(defaultValue);

type Props = {
  children: JSX.Element;
};

export const AppContextProvider = ({ children }: Props) => {
  // use useState hook to manage and change global context

  const contextValue: AppContext = {};

  return <appContext.Provider value={contextValue}>{children}</appContext.Provider>;
};

export default appContext;
