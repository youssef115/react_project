import React from 'react';
import '../../../App.css'
import Dropmenu from './dropmenu';
function BodyHeader (){

    return (
        <>
        {/** the header search bar and the profile images */}
        <div className="container">
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={require("../../.././res/images/search.png")} alt=""/></button>
                </div>
                <Dropmenu/>
               {/*<div className="user">
                    /*<a href="/#" className="btn">Add New</a>
                    <img src={require("../../.././res/images/notifications.png")} alt=""/>
                    <div className="img-case">
                        <img  src={require("../../.././res/images/user.png")} alt="" />
                        
                        
                    </div>
                    
                </div>*/} 
            </div>
           
        </div>
        
    </div>
    
        </>
    )
}
export default BodyHeader;