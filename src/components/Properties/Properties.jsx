import React from 'react'
import Propertycard from '../Propertycard/Propertycard'
import './Properties.css'


const Properties = ({data,setData}) => {

  return (
    <div className='property-container'>
    {
        data.map((item)=>{
            return <Propertycard item={item} key={item.id}  data={data} setData={setData}/>
        })
    }
    </div>
  )
}

export default Properties