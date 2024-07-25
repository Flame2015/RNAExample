import React, {  useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    const printvalue = () =>{}
    return (
        <AppContext.Provider value={{counter,setCounter,printvalue}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
