import React from 'react'
import { Formik  ,Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

export default function CourForm(props) {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
    });

    return (<Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render={props =>{

            return <Form>
                
               
                 <Field   className='input1' name="name"  />
                 <ErrorMessage name="name"  /><br/>
                 <button  className="btn " >
            Add Cour
            
        </button>
                
            </Form>
           
        }}
    />

)}

