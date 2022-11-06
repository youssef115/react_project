import React from 'react';
import '../../../App.css'

function SideMenuItems(props){
    return (
        <>
        <img src={props.source} alt={props}/>&nbsp; <span>{props.text}</span> 
        </>
    )
}
export default SideMenuItems;