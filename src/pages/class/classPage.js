import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import './classPage.scss';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink } from "react-router-dom";
import Folder from '../../components/folder/folder';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { openPopup } from '../../actions/popup';

const mapStateToProps = state => ({
   ...state.popups
});

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   }
})

const ClassPage = (props) => {

   const [contentType, setContentType] = React.useState("collection")
   const students = [
      { name: "Jason Clark", collection: "Places of work", progress: "20%" },
      { name: "Michael Strikes", collection: "Places of work", progress: "35%" },
      { name: "John Doe", collection: "Places of work", progress: "10%" },
   ]

   const showContent = () => {
      if (contentType === "collection") {
         return (
            <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">
               <NavLink to="/class">
                  <Folder name="collection 1" type="classCollection" date="Apr 10, 2020" words="23" />
               </NavLink>
            </div>
         )
      } else {
         return (
            <div className="mx-10 lg:mx-20">
               <div className="bg-white py-7 rounded-3xl mt-10 shadow-lg">


                  <div className="text-gray students__rowHeader my-5">
                     <div className="col-start-2">Name Student</div>
                     <div>Collection</div>
                     <div>Progress</div>
                  </div>

                  <div className="flex-col mt-7">

                     {students.map((student, index) => {
                        return (
                           <div className="students__row" onClick={() => props.openPopup({ currentPopup: 'Student' })}>
                              <div className="text-numberGray">{index+1}</div>
                              <div>{student.name}</div>
                              <div className="font-medium">{student.collection}</div>
                              <div className="flex items-center">
                                 <div className="rounded-full h-2 w-full bg-purple relative">
                                    <div className="absolute bg-darkPurple h-full rounded-full" style={{ width: student.progress }}></div>
                                 </div>
                                 <div className="text-gray mx-5">{student.progress}</div>
                              </div>
                              <div className="ml-auto cursor-pointer"><MoreVertIcon /></div>
                           </div>
                        )
                     })}

                  </div>
               </div>
            </div>
         )
      }
   }

   return (

      <div className="mt-12">
         <div className="flex justify-between mx-10 lg:mx-20">
            <div className="flex">
               <div className={contentType === "collection" ? "text-purple font-medium cursor-pointer" : "text-gray font-light cursor-pointer hover:text-purple"} onClick={() => setContentType("collection")}>Collections</div>
               <div className={contentType === "students" ? "text-purple font-medium  ml-10  cursor-pointer" : "text-gray font-light ml-10 cursor-pointer hover:text-purple"} onClick={() => setContentType("students")}>Students</div>
            </div>
            {contentType === "collection"
               ? <ButtonBase><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Add Collection</div></ButtonBase>
               : <ButtonBase><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple" onClick={() => props.openPopup({ currentPopup: 'AddStudent' })}>Add Student</div></ButtonBase>}
         </div>

         {showContent()}

      </div>

   )
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ClassPage);