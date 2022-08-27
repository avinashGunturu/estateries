import React,{createContext, useState} from 'react'
import {propertyData} from '../data'

export const favContext = createContext()

const FavListContext = ({children}) => {
    const[favlist,setFavList] = useState([])
    const[data,setData]=useState([...propertyData])
  return (
    <favContext.Provider value={{favlist,setFavList,data,setData}}>
        {children}
    </favContext.Provider>
  )
}

export default FavListContext