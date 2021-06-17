import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './signUp.scss'

import { NavLink } from "react-router-dom";
import ButtonBase from '@material-ui/core/ButtonBase';

import {createUser} from '../../service/requests';


// img
import logo from '../../img/logorwAnimated.svg';

import {
   currentUser
} from '../../actions/currentUser';

const mapDispatchToProps = dispatch => ({
   currentUser: (payload) => {
      return dispatch(currentUser(payload));
   }
})

const SignUp = (props) => {

   const [user, setUser] = useState({
      name: '',
      email: '',
      password: ''
   });

   const [checkAgreement, setCheckAgreement] = useState(false)
   const [nameError, setNameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [agreementError, setAgreementError] = useState("");
   const [existUserMessage, setExistUserMessage] = useState("");

   const history = useHistory();


   const handleChange = (e) => {
      setUser({
         ...user,
         [e.target.id]: e.target.value
      })
   }

   // validation
   const validate = () => {
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      let agreementError = "";

      if (!user.name) {
         nameError = "Name can not be blank";
      }

      if (!user.email) {
         emailError = "Invalid email";
      }

      if (user.email !== null) {
         let lastAtPos = user["email"].lastIndexOf('@');
         let lastDotPos = user["email"].lastIndexOf('.');


         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && user["email"].indexOf('@@') == -1 && lastDotPos > 2 && (user["email"].length - lastDotPos) > 2)) {
            emailError = "Invalid email";
         }
      }

      if (user.password.length < 5) {
         passwordError = "Password is too short";
      }

      if(!checkAgreement) {
         agreementError = "Please read and agree with Items & Conditions";
      }

      if (emailError || nameError || passwordError || agreementError) {
         setNameError(nameError);
         setEmailError(emailError);
         setPasswordError(passwordError);
         setAgreementError(agreementError);
         return false;
      }
      return true;
   }

   const signUp = async (e) => {
      e.preventDefault();
      const isValid = validate();

      if (isValid) {

         setNameError("");
         setEmailError("");
         setPasswordError("");
         setAgreementError("");
        
        
         try { 
          
            console.log(user)
            const res = await createUser(user);

            
            localStorage.setItem("accessToken", res.data.token);
            history.push("/chooseRole");
         }
         catch(e) {
            if(e.response.data.code === 409) {
               setExistUserMessage("This user already exist")
            }
         }
      }
   }

   return (
      <div className="authWrapper">
         <object type="image/svg+xml" className="w-32 mx-auto" data={logo}></object>


         <div className="flex flex-col-reverse mt-20 relative">
            <input type="text" id="name" className={nameError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)} />
            <label for="name" className="">Name</label>
         <div className="auth__textError">{nameError}</div>
         {existUserMessage && <div className="absolute top-0 right-0 text-xs text-redError">{existUserMessage}</div>}

         </div>
         <div className="flex flex-col-reverse mt-5 relative">
            <input type="email" id="email" className={emailError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)} />
            <label for="email" className="">Email</label>
         <div className="auth__textError">{emailError}</div>
         </div>
         <div className="flex flex-col-reverse mt-5 relative">
            <input type="password" id="password" className={passwordError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)} />
            <label for="password" className="">Password</label>
         <div className="auth__textError">{passwordError}</div>
         </div>

         <div className="auth__formAgreement cursor-pointer relative">
            <input className="auth__checkbox" type="checkbox" id="agreement" name="agreement" onChange={() => setCheckAgreement(!checkAgreement)}></input>
            <div className="auth__checkboxCustom"></div>
            <label for="agreement" className="auth__formAgreementLabel">By Signing Up i agree with <a href="#">Items & Conditions</a></label>
            <div className="auth__textError auth__agreementErrorText text-left">{agreementError}</div>
         </div>

         <div className="mx-auto w-max mt-14">
            <ButtonBase>
               <div className="bg-darkPurple px-10 py-2 rounded-md text-white border text-lg mx-auto w-min whitespace-nowrap hover:bg-hoverPurple transition cursor-pointer" onClick={signUp}>Sign Up</div>
            </ButtonBase>
         </div>

         <div className="text-sm text-darkBlue text-center mt-8">Already have an account?
            <NavLink to="/logIn" ><span className="font-semibold text-purple ml-2 cursor-pointer transition hover:text-hoverPurple">Log In</span></NavLink>
         </div>


      </div>
   )
}

export default connect(
   null,
   mapDispatchToProps
)(SignUp);
