import React,{Component} from 'react'
import { getEtud , deleteEtud} from './EtudApi' 
import "./table.css"
import Button from './Button'



class ListEtud extends Component{

  state = {
   Etuds : [],
   Etud: {},
    

  }


    componentDidMount=()=>{
    getEtud().then(Response =>{
          this.setState({
            Etuds:  Response.data
          })
      })
    }

    setActive=(Etud)=>{
      this.setState({'Etud':Etud})
    }

    deleteEtud = (Etud) => {
      deleteEtud(Etud.id).then(()=>
        {
    
     
          let Etuds = this.state.Etuds;

          const index = Etuds.indexOf(Etud);
          Etuds.splice(index, 1);
          this.setState({Etuds});
       alert('voulez_vous vraiment supprimer cette etudiant');
          
        })
        
      }
    render(){

      return(
       
        <div className="aPP">
          <table className='tableee'>
            <tr className='tr1'>
              <th className='th1'>CIN</th>
              <th className='th1' >NOM</th>
              <th className='th1'>PRENOM</th>
              <th className='th1'>EMAIL</th>
              <th className='th1'>CLASSE</th>
              <th className='th1'>Action</th>
              

            </tr>
         {this.state.Etuds.map(Etud=>(
          
        <tr className='tr1'>
          
           <td  className='td1' key={Etud.id}>
           {Etud.ncin} {''} 
            </td>
            <td className='td1'>{Etud.nom}</td>
            <td className='td1'>{Etud.prenom}</td>
            <td className='td1'>{Etud.email}</td>
            <td className='td1'>{Etud.classe}</td>
            
             <td className='td1'><Button cin={Etud.ncin} /></td>
            
             
           
             
         
        </tr>
             )  )} 
        </table>
       </div>
       

      )}

    
    }


 
  export default ListEtud ;