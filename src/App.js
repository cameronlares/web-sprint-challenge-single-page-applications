import React from 'react';
import {Styles} from './styles'
import {Formik, useField, Form} from 'formik';
import './App.css';
import * as Yup from 'yup';



const CustomText = ({ label, ...props}) => {
  const [field, meta] = useField(props)
  
  return (
    <>
  <label htmlFor= {props.id || props.name}>{label}</label>
  <input className = "text-input" {...field} {...props} />
  
  {meta.touched && meta.error ? (
    <div className = "error">{meta.error}</div>
  ) :null}
  
    </>
  )
  }


const CustomSize = ({ label, ...props}) => {
  const [field, meta] = useField(props)
  
  return (
    <>
  <label htmlFor= {props.id || props.name}>{label}</label>
  <select {...field} {...props} />
  
  {meta.touched && meta.error ? (
    <div className = "error">{meta.error}</div>
  ) :null}
  
    </>
  )
  
  }
  
  
  const CustomToppings = ({ label, ...props}) => {
    const [field, meta] = useField(props)
    
    return (
      <>
    <label htmlFor= {props.id || props.name}>{label}</label>
    <select {...field} {...props} />
    
    {meta.touched && meta.error ? (
      <div className = "error">{meta.error}</div>
    ) :null}
    
      </>
    )
    }

const CustomSauce = ({ label, ...props}) => {

  const [field, meta] = useField(props)
    
    return (
      <>
    <label htmlFor= {props.id || props.name}>{label}</label>
    <select {...field} {...props} />
    
    {meta.touched && meta.error ? (
      <div className = "error">{meta.error}</div>
    ) :null}
    
      </>
    )
  
  }
  



const App = () => {
  return (
    <div className="App">

  <Styles>
        <Formik
    //Initial Empty Values
    initialValues = {{
      choiceOfSize: '',
      choiceOfSauce: '',
      addToppings: '',
    }}

//Yup Validation

    validationSchema={Yup.object({

      name: Yup.string()
      .min(7,'Must be at least 7 characters')
      .max(15, 'Must be 15 characters or less')
      .required(' Required'),

      email: Yup.string()
      .email ('Invalid email address')
      .required('Required'),

      choiceOfSize: Yup.string()
      .oneOf(['Large','Medium', 'Small'],'Invalid Size Selection')
      .required('Required'),

      choiceOfSauce: Yup.string()
      .oneOf(['OriginalRed', '', 'GarlicRanch', 'BBQSauce','SpinachAlfredo','other'], ' Invalid Sauce Choice')
       .required(' Required'),

       addToppings: Yup.string()
       .oneOf(['Pepperoni','Sausage','Pineapple','Bacon'], 'Invalid Topping')
       .required('Required')
     })}
    
       // Callback when form is submited

       onSubmit= {(values, {setSubmitting, resetForm}) =>{
        setTimeout(()=>{
          alert(JSON.stringify(values, null, 2))
          resetForm();//reset form
          setSubmitting(false)
        }, 3000)
      }}
    
    >
{props => (
            <Form>
          <h1>Lambda Eats</h1>

                <CustomText label= "Name" name = "name" type = "text" placeholder= "Cameron" />
                <CustomText label= "Email" name = "email" type = "email" placeholder= "Cameron@gmail.com" />
  
              <h2>Choice of Size</h2>
              
              <CustomSize label= "Select Size" name= "choiceOfSize">
              <option value = "">Select Your Size</option>
<option value = "Large">Large</option>
<option value = "Medium">Medium</option>
<option value = "Small">Small</option>
<option value = "other">other</option>
 </CustomSize>

 <h2>Choice of Toppings</h2>
          <CustomToppings label= "Select Toppings" name= "addToppings">
 <option value = "">Select Your Toppings</option>
<option value = "Pepperoni">Pepperoni</option>
<option value = "Sausage">Sausage</option>
<option value = "Pineapple">Pineapple</option>
<option value = "Bacon">Bacon</option>
<option value = "other">other</option>
 </CustomToppings  >

 <h2>Choose Sauce</h2>
<CustomSauce label= "Select Sauce" name= "choiceOfSauce">

<option value = "">Select Your Sauce</option>
<option value = "OriginalRed">OriginalRed</option>
<option value = "GarlicRanch">GarlicRanch</option>
<option value = "BBQSauce">BBQSauce</option>
<option value = "SpinachAlfredo">SpinachAlfredo</option>
<option value = "other">other</option>

</CustomSauce>

<button type = "submit"> {props.isSubmitting ? 'Loading....' : 'Submit'}</button>
            </Form>

)} 

    </Formik>
     
    </Styles>
    </div>
  );
};


export default App;
