import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../service/requests';
import ButtonBase from '@material-ui/core/ButtonBase';
import {getUser, getCollections} from '../../service/requests';


import '../signUp/signUp.scss'

import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// for switch
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// animated logo
import logo from '../../img/logorwAnimated.svg';

import { currentUser } from '../../actions/currentUser';
import { setCollections } from '../../actions/collections';

const mapStateToProps = state => ({
   ...state.currentUser
});

const mapDispatchToProps = dispatch => ({
   currentUser: (payload) => {
      return dispatch(currentUser(payload));
   },
   setCollections: (payload) => {
      return dispatch(setCollections(payload));
   }
})


const LogIn = (props) => {

   const {
      currentUser,
      setCollections
   } = props;

   const [userData, setUserData] = useState({
      email: '',
      password: ''
   });
   
   const history = useHistory();
   const [rememberMe, setRememberMe] = React.useState(false);
   const [errorMessage, setErrorMessage] = useState(null);
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");


   const handleChange = (e) => {
      setUserData({
         ...userData,
         [e.target.id]: e.target.value
      });
   }

   useEffect(() => {
      if(userData.email != "") setEmailError(false)
      if(userData.password != "") setPasswordError(false)
   }, [userData])

    // validation
    const validate = () => {
      let emailError = "";
      let passwordError = "";

      if (!userData.email) {
         emailError = "Email cannot be blank";
      }

      if (!userData.password) {
         passwordError = "Password cannot be blank";
      }


      if (emailError || passwordError) {
         setEmailError(emailError);
         setPasswordError(passwordError);
         return false;
      }
      return true;
   }

   const logIn = async () => {
      const isValid = validate();

      if (isValid) {

      const res = await loginUser(userData).catch(err => {
         setErrorMessage("Wrong email or password")
         console.log(err);
      });

      if(!res) {
         return;
      }

         localStorage.setItem("accessToken", res.data.token);

         const resp = await getUser().catch(console.log);
  
         if(!resp) {
            // set error
            localStorage.removeItem("accessToken");
            history.push("/login");
            return;
         } 
        
         currentUser({ user: resp.data.user });

         const loadCollections = async () => {
            try {
              const res = await getCollections();
              setCollections({ collections: res.data.collections })
            }
      
            catch (error) {
              console.log(error)
            }
          }

         loadCollections();
         history.push("/");
       }
   }


   return (
      <div className="authWrapper">
         <object type="image/svg+xml" className="w-32 mx-auto" data={logo}></object>

         <div className="flex flex-col-reverse mt-20 relative">
            <input type="email" id="email" className={emailError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)}/>
            <label for="email" className="">Email</label>
            <div className="auth__textError">{emailError}</div>
            {errorMessage && <div className="absolute top-0 right-0 text-xs text-redError">{errorMessage}</div>}
         </div>
         <div className="flex flex-col-reverse mt-7 relative">
            <input type="password" id="password" className={passwordError ? "auth__input--error" : "auth__input"} onChange={e => handleChange(e)}/>
            <label for="password" className="">Password</label>
            <div className="auth__textError">{passwordError}</div>
         </div>
         <div className="flex justify-between items-center mt-7">
            <div className="flex items-center">
               <IOSSwitch checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} name="checkedB" />
               <div className="text-darkBlue ml-1 text-sm cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>Remember me?</div>
            </div>
            <div className="cursor-pointer text-darkBlue text-sm transition hover:text-purple">Forgot password?</div>
         </div>

         <div className="mx-auto w-max mt-14">
            <ButtonBase>
               <div className="bg-darkPurple px-10 py-2 rounded-md text-white border text-lg mx-auto w-min whitespace-nowrap hover:bg-hoverPurple transition cursor-pointer" onClick={logIn}>Log In</div>
            </ButtonBase>
         </div>

         <div className="text-sm text-darkBlue text-center mt-8">Don't have an account?
            <NavLink to="/signUp" ><span className="font-semibold text-purple ml-2 cursor-pointer transition hover:text-hoverPurple">Sign Up</span></NavLink>
         </div>

      </div>
   )
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LogIn);




const IOSSwitch = withStyles((theme) => ({
   root: {
      width: 40,
      height: 24,
      padding: 0,
   },

   switchBase: {
      padding: 4,
      color: '#fafafa',
      '&$checked': {
         transform: 'translateX(16px)',
         color: '#6A75CA',
         '& + $track': {
            backgroundColor: '#d4d9ef',
            opacity: 1,
            border: 'none',
         },
      },
      '&$focusVisible $thumb': {
         color: '#52d869',
      },
   },
   thumb: {
      width: 16,
      height: 16,
   },
   track: {
      borderRadius: 26 / 2,
      border: `1px solid #eee`,
      backgroundColor: "#d1d5df",
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
   },
   checked: {},
   focusVisible: {},
}))(({ classes, ...props }) => {
   return (
      <Switch
         focusVisibleClassName={classes.focusVisible}
         disableRipple
         classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
         }}
         {...props}
      />
   );
});