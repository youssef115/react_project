import React from "react";
import axios from "axios";
function Cards(){
    
    const [enseignant, setEnseignant] = React.useState("");
    const [etudiant,setEtudiant]=React.useState("")
    React.useEffect(() => {
        axios.get("http://localhost:5000/enseignant/numberOf").then(res=>{
        console.log(res.data)
        setEnseignant(res.data)
        axios.get("http://localhost:5000/etudiant/numberOf").then(res=>{
            console.log("the number of studients",res.data)
            setEtudiant(res.data)
        })

    }
        ).catch(err=>console.log(err))
      }, []);
     
    return (
        <>
        
        <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>{etudiant.number}</h1>
                        <h3>Etudiant</h3>
                    </div>
                    <div className="icon-case">
                        <img src={require("../../.././res/images/students.png")} alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>{enseignant.number}</h1>
                        <h3>Enseignant</h3>
                    </div>
                    <div className="icon-case">
                        <img src={require("../../.././res/images/teachers.png")} alt=""/>
                    </div>
                </div>

                {/* the number of the school used in  */}

                <div className="card">
                    <div className="box">
                        <h1>5</h1>
                        <h3>Groupe des Ecoles</h3>
                    </div>
                    <div className="icon-case">
                        <img src={require("../../.././res/images/schools.png")} alt=""/>
                    </div>
                </div>

                {/* here we the Income card */}

                <div className="card">
                    <div className="box">
                        <h1>350000</h1>
                        <h3>Revenu</h3>
                    </div>
                    <div className="icon-case">
                        <img src={require("../../.././res/images/income.png" )}alt=""/>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Cards;