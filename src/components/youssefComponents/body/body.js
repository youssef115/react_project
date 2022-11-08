import React from 'react';
import '../../../App.css'

function Body(props){
    return (
        <>
        <div className="container">
                 <div className="content">
                    {props.children}
                    </div>
              </div>
            </>
    );
}

export default Body;