import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import './signUp.scss'
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.svg';

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

   const [nameError, setNameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

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

      if (!user.name) {
         nameError = "name can not be blank";
      }

      if (!user.email) {
         emailError = "invalid email";
      }

      if (user.email !== null) {
         let lastAtPos = user["email"].lastIndexOf('@');
         let lastDotPos = user["email"].lastIndexOf('.');


         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && user["email"].indexOf('@@') == -1 && lastDotPos > 2 && (user["email"].length - lastDotPos) > 2)) {
            emailError = "invalid email";
         }
      }

      if (user.password.length < 5) {
         passwordError = "password is too short";
      }


      if (emailError || nameError || passwordError) {
         setNameError(nameError);
         setEmailError(emailError);
         setPasswordError(passwordError);
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

         // const res = await axios.post('http://localhost:3000/api/v1/users', user);
         
         // props.currentUser({user: user});
         // localStorage.setItem("accessToken", res.data.token);
         console.log(user)
         props.currentUser({user: user});
         // props.closePopup();
      }
   }

   return (
      <div className="authWrapper">
         <div className=""><img src={logo} className="w-24 mx-auto" /></div>
         <div className="flex flex-col-reverse mt-20">
            <input type="text" id="name" className={nameError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)}/>
            <label for="name" className="font-medium">Name</label>
         </div>
            <div className="text-errorRed text-center mt-1 text-sm">{nameError}</div>
         <div className="flex flex-col-reverse mt-7">
            <input type="email" id="email" className={emailError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)}/>
            <label for="email" className="font-medium">Email</label>
         </div>
            <div className="text-errorRed text-center mt-1 text-sm">{emailError}</div>
         <div className="flex flex-col-reverse mt-7">
            <input type="password" id="password" className={passwordError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)}/>
            <label for="password" className="font-medium">Password</label>
         </div>
            <div className="text-errorRed text-center mt-1 text-sm">{passwordError}</div>

         <div className="bg-darkPurple px-9 py-2 rounded-md text-white border text-lg mx-auto w-min whitespace-nowrap mt-10 hover:bg-hoverPurple transition cursor-pointer" onClick={signUp}>Sign Up</div>

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
