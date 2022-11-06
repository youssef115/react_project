import React from 'react'
import '../../../App.css'
import EnseigantValider from './enseignantValider/enseignantValider';
import EnseigantNonValider from './enseignantNonValider/enseignantNonValider'





function Enseigant(){
 
    return (
  
    <>
        <div className="content-2">
                <div className="recent-payments">
                    <div className="title">
                        <h2>List des enseignant Vlider</h2>
                        <a href="#" className="btn">Voir touts</a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                            <th>CIN</th>
                            <th>nom</th>
                            <th>prenom</th>
                            <th>email</th>
                            <th>telephone</th>
                            <th>secialite</th>
                            <th>Option</th>
                     
                        </tr>
                        </thead>
                        <tbody>
                            <EnseigantValider cin={12345678} nom ="mostpha" prenom="ben salah" email="japa@gmail.com" telephone={12345678} secialite="sell lift"/>
                            <EnseigantValider cin={12345678} nom ="mostpha" prenom="ben salah" email="japa@gmail.com" telephone={12345678} secialite="sell lift"/>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>

                {/* enseigant non valider*/}


                <div className="new-students">
                    <div className="title">
                        <h2>Enseignant Non Validé</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                      <thead>
                        <tr>
                            {/* <th>Profile</th> */}
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
            </div>
    </>
    )
}

export default Enseigant;