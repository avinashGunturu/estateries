import React, { useState } from 'react'
import './Propertycard.css'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillHeartFill}from 'react-icons/bs'
import {IoBedOutline} from 'react-icons/io5'
import {BiBath} from 'react-icons/bi'
import {BiArea} from 'react-icons/bi'



const Propertycard = ({item,data,setData}) => {

    const [fav,setFav] =useState(false)

    const favChange = ()=> {
        setFav(ov => !ov)
        const newdata = data.map((propert)=>{
            if(item.id===propert.id){
                return {...propert,favourite:!fav}
            }else {
                return propert
            }
        })

        setData(newdata)
    }
      return (
    <div className="card-container">
        {item?.popular ? <p className='popular'>Popular</p>:''}
        <div className="image-container">
            <img src={item?.property_image}  alt={item?.property_name} />
        </div>
        <div className="content-container">
        <div className="price-fav-container">
            <p><span className='price'>₹{item?.property_price}</span>/month</p>
            <div className='fav-container'>
                {
                    item.favourite || fav ? <BsFillHeartFill className='cfav' onClick={favChange}/> : <AiOutlineHeart className='fav' onClick={favChange} />
                }
           
            </div>
        </div>
        <div className='property-name-address'>
            <h2 className='name'>{item?.property_name} <span className='propertyType'>/ {item?.property_type}</span></h2>
            <p className='address'> {item?.propertyAddress}, {item?.property_city}  <span style={{fontSize:'12px',color:'blueviolet',marginLeft:'10px'}}>{item?.avilability_date}</span></p>
            
        </div>
        <hr />
        <div className="bed-bath-area-container">
            <div className="container">
                <IoBedOutline className='bed '/>
                <p>{item?.property_beds} Beds</p>
            </div>
            <div className="container">
                <BiBath className='bath' />
                <p>{item?.property_bathrooms} Bathrooms</p>
            </div>
            <div className="container">
                <BiArea className="area"/>
                <p>{item?.property_length}<span className='multiplication-symbol'>X</span>{item?.property_width} m <sup>2</sup> </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Propertycard