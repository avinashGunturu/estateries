import React, {useContext } from 'react'
import Propertycard from '../../components/Propertycard/Propertycard'
import {favContext} from '../../context/FavListContext'


const FavouriteProperty = () => {
  const {data,setData} = useContext(favContext)

const favlistdata = data.filter((item)=>item.favourite===true)
  return (
    <div className='property-container'>
      {
   
   favlistdata.map((item)=>{
    return <Propertycard item={item} key={item.id} data={data} setData={setData} />
})      
      }
        
    </div>
  )
}

export default FavouriteProperty