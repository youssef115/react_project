import React from 'react';
import '../../../App.css'

function Body(props){
    return (
        <>
        <div className="containerr">
                 <div className="content">
                    {props.children}
                    </div>
              </div>
            </>
    );
}

export default Body;