import React,{useState} from 'react'
import { Formik  ,Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link} from "react-router-dom"
import axios from 'axios'

export default function SessForm(props) {
    const[enseig,setEnsieg]=useState({})

   const handleAdd=()=>{
    axios.post("http://localhost:5000/session/addSession/",enseig)
    .then(console.log("update of the enseig is done"))
   }
   //window.location.reload(false)
   const handleChangeNom=(e)=>{
        setEnsieg({
        _id:enseig._id,
        nomSession:e.target.value
      })
   }


    const schema = Yup.object().shape({
        name: Yup.string().required(),
    });

    return (
    <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props =>{

            return <Form>
                <div className='color'>
                <h5 className='h55'>Name  </h5>
                 <input type="text"  required id="nom"  defaultValue={enseig.nomSession} onChange={handleChangeNom}/>
                 <ErrorMessage name="name"  /><br/>
                 <Link to="/DashBoradEnseig"><button  className='adds' type="submit" onClick={handleAdd}> Send</button></Link>
                </div>
            </Form>
           
        }}

    
    />

)}
