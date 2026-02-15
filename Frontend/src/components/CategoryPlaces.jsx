import { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import CategoryPlacesList from './CategoryPlacesList';
function CategoryPlaces() {
    let [places,setPlaces]=useState([]);
    let {category}=useParams();
    let navigationCategory=async()=>{
        try{
        let res=await fetch(`http://localhost:8080/api/tourist/category/${category}`);
        let data=await res.json();
        setPlaces(data)
      console.log(data)}
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
            navigationCategory()
    },[category])
  return (
    <div>
        
        {places.map((place)=>(
            <CategoryPlacesList 
            key={place.place_id}
            place={place}/>
            
           
        ))}
    </div>
  )
}

export default CategoryPlaces