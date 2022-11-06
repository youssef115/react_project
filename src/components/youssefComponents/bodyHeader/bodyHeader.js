import React from 'react';
import '../../../App.css'
function BodyHeader (){

    return (
        <>
        {/** the header search bar and the profile images */}
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={require("../../.././res/images/search.png")} alt=""/></button>
                </div>
                <div className="user">
                    <a href="#" className="btn">Add New</a>
                    <img src={require("../../.././res/images/notifications.png")} alt=""/>
                    <div className="img-case">
                        <img src={require("../../.././res/images/user.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BodyHeader;