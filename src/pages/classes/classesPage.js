import React, { useRef, useEffect } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink } from "react-router-dom";
import Folder from '../../components/folder/folder';


const ClassesPage = (props) => {

   return (
      <div className="mt-12">
         <div className="flex justify-between mx-10 lg:mx-20">
            <div className="text-dark font-medium text-2xl capitalize">Classes</div>
            <ButtonBase><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Add Class</div></ButtonBase>
         </div>
         <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">
            <NavLink to="/class">
               <Folder name="class 5a" type="class" date="Apr 10, 2020" students="17" />
            </NavLink>
            <NavLink to="/class">
               <Folder name="class 5a" type="class" date="Apr 10, 2020" students="17" />
            </NavLink>
         </div>

      </div>
   )
}

export default ClassesPage;