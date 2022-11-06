import React from 'react';
import BodyHeader from '../bodyHeader/bodyHeader';

import Cards from '../cards/Cards';
import Enseigant from '../Enseigant/enseignant';
import '../../../App.css'

function Body(){
    return (
        <>
            <div className="container">
                 <BodyHeader/>
                <div className="content">
                    <Cards/>
                    <Enseigant/>
                </div>
             </div>
            </>
    );
}

export default Body;