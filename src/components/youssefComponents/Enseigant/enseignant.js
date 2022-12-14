import React from 'react'
import '../../../App.css'
import EnseigantValider from './enseignantValider/enseignantValider';
//import EnseigantNonValider from './enseignantNonValider/enseignantNonValider'
//to get the route address

function Enseigant(props){
    
 
    return (
  
    <> 
        
        <div className="content-2">
                <div className="recent-payments">
                    <div className="title">
                        <h2>{props.title}</h2>
                        <a href="#" className="btn11">Voir touts</a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                            <th>CIN</th>
                            <th>nom</th>
                            <th>prenom</th>
                            <th>email</th>
                            <th>telephone</th>
                            <th>specialite</th>
                            <th>Option</th>
                     
                        </tr>
                        </thead>
                        <tbody>

                            <EnseigantValider />
                      
                        </tbody> 
                        <tfoot></tfoot>
                    </table>
                </div>

                {/* enseigant non valider*/}

                {/*
                <div className="new-students">
                    <div className="title">
                        <h2>Enseignant Non Validé</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>prenom</th>
                            <th>option</th>
                        </tr>
                        </thead>
                        <tbody>
                            <EnseigantNonValider source={require("../../.././res/images/user.png")} 
                                nom="youssef" prenom="najjar"
                                
                            />
                            <EnseigantNonValider source={require("../../.././res/images/user.png")} 
                                nom="mohammed" prenom="ben mohammed"
                                
                            />
                            <EnseigantNonValider source={require("../../.././res/images/user.png")} 
                                nom="mostpha" prenom="ben mostpha"
                                
                            />
                            
                      </tbody>
                    </table>
                </div>
            */}
            </div>
           
           
    </>
    )
}

export default Enseigant;