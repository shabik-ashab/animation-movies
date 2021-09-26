import React from 'react';
import './addedPd.css';

const AddedPd = (props) =>{
    console.log(props)
    const {name,img} = props;
    return(
        <div className="added-pd mt-2 d-flex">
           <img src={img} className=" p-1 me-3" alt="..."/>
           <p>name:{name}</p>
        </div>
    )
}
export default AddedPd;