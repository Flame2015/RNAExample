import React, {createContext, useContext} from 'react';
import {Text} from 'react-native';

export const ExampleContext = createContext({username: 'Ankur'});

interface Props {
  children: React.ReactNode;
}

export const ExampleProvider: React.FC<Props> = ({children}) => {
  return (
    <ExampleContext.Provider value={{username: 'Chibuzor'}}>
      {children}
    </ExampleContext.Provider>
  );
};

export const Greet = () => {
  const data = useContext(ExampleContext);
  return <Text>Hello, {data.username}</Text>;
};
