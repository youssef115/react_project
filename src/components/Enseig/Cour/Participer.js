
import { Component } from "react";
import {getCours } from './CourApi';
import '../ListSideBar/ListEtud/table.css'
import "./CourForm"

import Action from "./Action";
import ButtonCour from "./ButtonCour";

class Participer extends Component{

    state = {
     Cours : [],
     cour : {},
      

    }


      componentDidMount=()=>{
      getCours().then(Response =>{
            this.setState({
              Cours:  Response.data
            })
        })
      }


      setActive=(cour)=>{
          this.setState({'cour':cour})
      }
    render(){
        return(
          <>     
                  <table className='tableee'>
                    <tr className='tr1'>
                      <th className='th1' >NOM</th>
                     <th className='th1'>Action</th>

                    </tr>
            <tbody>
               {this.state.Cours.map(cour=>(
            <tr className='tr1'>
                <td className='td1'>{cour.nomCour}</td>
                
             
                <td className='td1'>
                <Action nomCour={cour.nomCour} />

              </td>
              </tr>
    
            ) )}
            <ButtonCour/>

            </tbody>
             </table> 
             
         </>
            
           )}
               }


export default Participer;