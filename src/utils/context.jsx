import { createContext, useState} from "react";

export const DataContext=createContext();

export const DataProvider = ({children}) => {

    const [name,setName]=useState('');
    const [temp,setTemp]=useState('');
    const [humidity,setHumidity]=useState('');
  return (
    <DataContext.Provider 
    value={{
        name,
        setName,
        temp,
        setTemp,
        humidity,
        setHumidity
    }}
    >
    {children}
    </DataContext.Provider>
  )
}
