import React from 'react'
import './VendorDisplay.css'


function VendorDisplay(props){
    if (!props.data) return null; 
    return(
        <div>
        <div className='inside'>
            <h2>Name :{props.data.name}</h2>
            <p>City :{props.data.city}</p>
            <p>Area :{props.data.area}</p>
            
            <p>Rating : {props.data.finalrating}</p>

        </div>
    </div>
    )
}
export default VendorDisplay;