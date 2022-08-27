import React, { useContext } from 'react'
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import {favContext} from '../../context/FavListContext'

const Rent = () => {

  const {data,setData} = useContext(favContext)
 

  return (
    <div>
        <SearchFilter   propertyData={data} setData={setData}/>
    </div>
  )
}

export default Rent