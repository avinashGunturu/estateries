
import React,{useContext} from 'react'
import Properties from '../../components/Properties/Properties';
import {favContext} from '../../context/FavListContext'

const Rent = () => {
  const {data,setData} = useContext(favContext)

  return (
    <div>
        <Properties data={data} setData={setData} />
    </div>
  )
}

export default Rent