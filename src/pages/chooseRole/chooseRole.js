import React, { useState, useEffect } from 'react'
import './chooseRole.scss'
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
import { getUser, getCollections } from '../../service/requests';

// img
import logo from '../../img/logo.svg';

import studentRole from '../../img/ico/studentRole.svg';
import teacherRole from '../../img/ico/teacherRole.svg';
import organizationRole from '../../img/ico/organizationRole.svg';

import { currentUser } from '../../actions/currentUser';
import { setCollections } from '../../actions/collections';

const mapDispatchToProps = dispatch => ({
   currentUser: (payload) => {
      return dispatch(currentUser(payload));
   },
   setCollections: (payload) => {
      return dispatch(setCollections(payload));
   }
})

const ChooseRole = (props) => {

   const {
      currentUser,
      setCollections
   } = props;

   const history = useHistory();
   const [role, setRole] = useState("");
   const [error, setError] = useState(false);

   const onNext = async () => {

      if(!role) {
         setError(true)
         return;
      }

      //update role 

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

   const selectClass = () => {
      if(!error) return;
      if(error) {
         document.querySelector('.chooseRole__container').classList.add("chooseRole__container--error");
         setTimeout(() => {
            document.querySelector('.chooseRole__container').classList.remove("chooseRole__container--error");
          }, 820);
          setError(false)
      }
   }

   useEffect(() => {
      selectClass()
   }, [error])


   return (
      <div className="chooseRole">
          <div className=""><img src={logo} className="w-24 mx-auto" /></div>
          <div className="text-dark text-center text-xl mt-20">Choose your role</div>
          <div className="chooseRole__container">
             <div className={role === 'student' ? "chooseRole__role--active" : "chooseRole__role" } onClick={() => setRole("student")}>
                <img src={studentRole} alt="Student icon"/>
                <div className="chooseRole__roleName">Student</div>
             </div>

             <div  className={role === 'teacher' ? "chooseRole__role--active" : "chooseRole__role" }  onClick={() => setRole("teacher")}>
                <img src={teacherRole} alt="Student icon"/>
                <div className="chooseRole__roleName">Teacher</div>
             </div>

             <div  className="chooseRole__disabled"  onClick={() => setRole("organization")}>
             {/* <div  className={role === 'organization' ? "chooseRole__role--active" : "chooseRole__role" }  onClick={() => setRole("organization")}> */}
                <img src={organizationRole} alt="Student icon"/>
                <div className="chooseRole__roleName">Organization</div>
             </div>
          </div>

          <div className="mx-auto w-max mt-14">
             <ButtonBase>
                <div className="bg-darkPurple px-10 py-2 rounded-md text-white border text-lg mx-auto w-min whitespace-nowrap hover:bg-hoverPurple transition cursor-pointer" onClick={onNext}>Next</div>
            </ButtonBase>
         </div>
      </div>
   )
}

export default connect(
   null,
   mapDispatchToProps
)(ChooseRole);
