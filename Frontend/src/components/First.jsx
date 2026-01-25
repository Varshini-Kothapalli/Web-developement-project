import './First.css'
import VendorDisplay from './VendorDisplay';
import { useState,useEffect } from 'react';

function First(){
    let [sposts,setPosts]=useState([]);
     async function calling(){
        let res=await fetch("http://localhost:8080/vendor-api/vendors");
        let posts=await res.json();
        setPosts(posts.payload);

     }
     useEffect(()=>{
        calling();
     },[]);

    
    return(
        <div className='outside'>
            <VendorDisplay data={sposts[0]}></VendorDisplay>
            <VendorDisplay data={sposts[1]}></VendorDisplay>

        </div>
    )
}
export default First;
// let [counter,SetCounter]=useState(0);
    // let [emp,setEmp]=useState({eno:10,ename:"var"});
    // function counting(){
    //     SetCounter(counter+1);
    // }
    // function setting(){
    //     setEmp({...emp,eno:200});
    {/* <h2>Count: {counter}</h2>
            <button onClick={counting}>Count</button>
            <h3>eno:{emp.eno}</h3>
            <h3>ename :{emp.ename}</h3>
            <button onClick={setting}>Set</button> */}
    // }