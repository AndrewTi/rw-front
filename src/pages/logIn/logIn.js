import React, {useState} from 'react'
import '../signUp/signUp.scss'
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// for switch
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import logo from '../../img/logo.svg';

const IOSSwitch = withStyles((theme) => ({
   root: {
      width: 40,
      height: 24,
      padding: 0,
   },

   switchBase: {
      padding: 4,
      color: '#d1d5df',
      '&$checked': {
         transform: 'translateX(16px)',
         color: '#364165',
         '& + $track': {
            backgroundColor: '#d1d5df',
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
      backgroundColor: theme.palette.grey[50],
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


const SignUp = () => {
   const [user, setUser] = useState({
      email: '',
      password: ''
   });
   
   const [rememberMe, setRememberMe] = React.useState(false);
   const [errorMessage, setErrorMessage] = useState(null);
   const history = useHistory();
   

   const handleChange = (e) => {
      setUser({
         ...user,
         [e.target.id]: e.target.value
      })
   }

   const logIn = async () => {

      try {
         // const res = await axios.post('http://localhost:3000/api/v1/users/login', user);
         
         // localStorage.setItem("accessToken", res.data.token);
         // props.currentUser({user: res.data.user});
         // setErrorMessage(null);
         // history.push("/dogs"); 
      } 
      
      catch (error) {
         setErrorMessage("wrong email or password")
      }
   }


   return (
      <div className="authWrapper">
         <div className=""><img src={logo} className="w-24 mx-auto" /></div>
         <div className="flex flex-col-reverse mt-7">
            <input type="email" id="email" className="auth__input" onChange={e => handleChange(e)}/>
            <label for="email" className="font-medium">Email</label>
         </div>
         <div className="flex flex-col-reverse mt-7">
            <input type="password" id="password" className="auth__input" onChange={e => handleChange(e)}/>
            <label for="password" className="font-medium">Password</label>
         </div>


         <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
               <IOSSwitch checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} name="checkedB" />
               <div className="text-darkBlue font-medium ml-1 text-sm cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>Remember me?</div>
            </div>
            <div className="cursor-pointer text-darkBlue font-medium text-sm transition hover:text-purple">Forgot password?</div>
         </div>
         <div className="bg-darkPurple px-9 py-2 rounded-md text-white border text-lg mx-auto w-min whitespace-nowrap mt-10 hover:bg-hoverPurple transition cursor-pointer" onClick={logIn}>Log In</div>

         <div className="text-sm text-darkBlue text-center mt-8">Don't have an account?
            <NavLink to="/signUp" ><span className="font-semibold text-purple ml-2 cursor-pointer transition hover:text-hoverPurple">Sign up</span></NavLink>
         </div>


      </div>
   )
}

export default SignUp