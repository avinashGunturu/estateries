import React, { useState } from 'react'
import Properties from '../Properties/Properties'
import './SearchFilter.css'
const SearchFilter = ({propertyData,setData}) => {


  //states to store values from input
  const [FilteredData,setFilterdData]=useState(propertyData)
     const [customFilter,setCustomFilter]= useState('')
     const [FilterValues,setFilterValues]=useState({
      Location:'Any Location',
      date:'',
      property:'Any Property',
      Startprice:'1000',
      Endprice:'10000000',
    
    })


  // input handling functions

  const locationCHange = (e)=>{
    const v =e.target.value;
    setFilterValues({...FilterValues,Location:v})
 }
 const dateCHange = (e)=>{
   const v =e.target.value;
   setFilterValues({...FilterValues,date:v})
 }
 const PropertyCHange = (e)=>{
   const v =e.target.value;
   setFilterValues({...FilterValues,property:v})
 }
 const PriceCHange = (e)=>{
   const v =e.target.value;
   if(v==='Any Price') {
   setFilterValues({...FilterValues,Startprice:'1000',Endprice:'10000000'})
   }else {
     const [sv,ev] = v.split("-");
     setFilterValues({...FilterValues,Startprice:sv.slice(1,),Endprice:ev.slice(1,)})
   }
  }

   const handleNameChange =(e)=>{
    setCustomFilter(e.target.value)
    if(e.target.value===''){
      setFilterdData(propertyData)
    return 
    }
    const newdata =  propertyData.filter((item) => {
      if(item.property_name.toLowerCase().includes(customFilter.toLowerCase())){
        return item;
      }
      return false;
    } )
  
    console.log(newdata)
    setFilterdData(newdata)
   }


//Filter function to filter out the values

const applyFilterHamdle = ()=>{

  // alert('applying filter')
  
  const newData = propertyData.filter ((item)=> {
  
  if(FilterValues.Location==='Any Location'&&
  FilterValues.date===''&&
  FilterValues.property==='Any Property'&&
  FilterValues.Startprice==='1000'&&
  FilterValues.Endprice==='10000000'
  ){
    return true
  }else{

// adding code to check the property date is greater than the selected date 

var  selectedDate = FilterValues.date.split('-').reverse()
var temp = selectedDate[0]
selectedDate[0]=selectedDate[1]
selectedDate[1]=temp;
 const lastselectedDate = selectedDate.join('/')
    const propertyAvilavleDate = item.avilability_date.split('-')
    var temp1 = propertyAvilavleDate[0]
    propertyAvilavleDate[0]=propertyAvilavleDate[1]
    propertyAvilavleDate[1]=temp1;
     const lastpropertyDate=propertyAvilavleDate.join('/')

    let date1 = new Date(lastpropertyDate).getTime();
  let date2 = new Date(lastselectedDate).getTime();


 //complteed date checking .... 


    if(((FilterValues.property==='Any Property'? true : false) || FilterValues.property.toLocaleLowerCase()===item.property_type.toLocaleLowerCase() ) &&
    ((FilterValues.Location==='Any Location'? true : false) || FilterValues.Location.toLocaleLowerCase() === item.property_city.toLocaleLowerCase() )  &&
   (+item.property_price >= +FilterValues.Startprice  && +item.property_price <= +FilterValues.Endprice) && ( date1>date2 || FilterValues.date==='') ){
    return true
   }else{
    return false
   }
  }
  
  
  
  })
  
  setFilterdData(newData);
  console.log(newData)
  
  }





  return (
   <div className='search-container'>
    <div className="searchinput">
        <h1>Search properties to rent</h1>
         <input type="text" placeholder='Search with Search Bar' value={customFilter} onChange={handleNameChange}/>
    </div>
    <div className="searchfilters-container">
      <div  className='filter' >
        <h5>Location</h5>
        <select onChange={locationCHange} value={FilterValues.Location}>
               <option >Any Location</option>
               
               <option >Bengaluru</option>
               <option >Delhi</option>
               <option >Hyderabad</option>
               <option >Pune</option>
               

         </select>
      </div>
      <div className='filter'>
            <h5>When</h5>
       <div className='date'>
        <p>{FilterValues.date!=="" ? FilterValues.date : 'Move in Date'}</p>
        <span className="datepicker-toggle">
  <span className="datepicker-toggle-button"></span>
  <input type="date" className="datepicker-input" onChange={dateCHange} />
</span>
       </div>
      </div>
      <div className='filter'>
        <h5>Price</h5>
        <select onChange={PriceCHange} >
               <option >Any Price</option>
               <option >₹1000-₹5000</option>
               <option >₹5000-₹10000</option>
         </select>
      </div>
      <div className='filter'>
        <h5>Property Type</h5>
        <select onChange={PropertyCHange}>
              <option >Any Property</option>
               <option >Houses</option>
               <option >Appartment</option>
               <option >Flat</option>
         </select>
      </div>
      <button className='filterBtn' onClick={applyFilterHamdle}>Search</button>
    </div>
    <Properties data={FilteredData} setData={setData} />
   </div>
  )
}

export default SearchFilter