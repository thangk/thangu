
import React, { useEffect, useRef, useState } from "react";
import { validateInput, isDuplicateAccount } from "../components/Utils";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";
import api from '../api/base'
import InputErrorCheck from "../components/InputErrorCheck";


const Contact = () => {

    

    
    
    
        const [errorToggle, setErrorToggle] = useState('off');
    
        const [validatedResult, setValidatedResult] = useState([]);
    
        const firstNameRef = useRef()
        const lastNameRef = useRef()
        const emailRef = useRef()
        const passwordRef = useRef()
        const confirmPasswordRef = useRef()
    
        const [students, setStudents] = useState();
    
        const { signup, signin, sendVerificationEmail } = useAuth()
    
        // const dispatch = useDispatch()
    
        const navigate = useNavigate()
    
        const fetchStudents = async () => {
            try {
                const res = await api.get('/students');
                setStudents(res.data);
            } catch (err) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
          }
    
        const handleSignup = async (e) => {
            e.preventDefault()
        
    
            const result = validateInput(
              {
              type: 'firstname', 
              value: firstNameRef.current.value
              },
              {
              type: 'lastname', 
              value: lastNameRef.current.value
              },
              {
              type: 'email', 
              value: emailRef.current.value
              },
              {
              type: 'password', 
              value: passwordRef.current.value
              },
              {
              type: 'confirmpassword', 
              value: confirmPasswordRef.current.value
              },
              {
              type: 'duplicatecheck', 
              value: isDuplicateAccount(emailRef.current.value, students)
              },
            )
    
        
        
            console.log(result)
            console.log('length: ' + result.length)
            
            if (result.length > 0) { 
              
              setValidatedResult(result)
              setErrorToggle('on')
              return
            }
        
            const newStudent = {
              
              firstName: firstNameRef.current.value,
              
              lastName: lastNameRef.current.value,
              
              email: emailRef.current.value,
              role: 'Customer',
              
              password: passwordRef.current.value
            }
        
            try {
              
              await signup(emailRef.current.value, passwordRef.current.value)
              sendVerificationEmail()
        
              // add to database
              await api.post('/students', newStudent)
        
              fetchStudents()
        
              
            //   for (const customer of students) {
                
                // if (customer.email === email) {
                    // dispatch(setLoggedInUser(customer))
                // }
            // }
        
            //   console.log(newStudent)
        
              
              await signin(emailRef.current.value, passwordRef.current.value)
        
              navigate('/account')
        
              console.log(`no errors`)
            } catch {
              console.log('Sign up failed. Something went wrong.')
            }
            
          }
        
        
          useEffect(() => {
            fetchStudents()
        
          }, [errorToggle])
    
        return (
            <div className="apply__wrapper">
    
    
    <InputErrorCheck errorToggle={errorToggle} setErrorToggle={setErrorToggle} validatedResult={validatedResult} />
              
              <form onSubmit={handleSignup}>
                
                <h1 className="loginsignuppage__page-title">Contact</h1>
    
                <div className="loginsignup-form-item-right">
                  <label htmlFor="firstname">First Name</label>
                  
                  <input type="text" id="firstname" ref={firstNameRef} required />
                </div>
    
                <div className="loginsignup-form-item-right">
                  <label htmlFor="lastname">Last Name</label>
                  
                  <input type="text" id="lastname" ref={lastNameRef} required />
                </div>
                
                <div className="loginsignup-form-item-right">
                  <label htmlFor="email">Email</label>
                  
                  <input type="text" id="email" ref={emailRef} required />
                </div>

                <div className="loginsignup-form-item-right">
                  <label htmlFor="message">Message</label>
                  
                  <textarea name="message" id="message" ref={emailRef} rows='4' cols={24}>

                  </textarea>
                </div>
    
                
    
                <button type="submit" className="loginsignup-button">Send</button>
    
              </form>
    
    
    
    
            </div>
        )};
    

export default Contact;