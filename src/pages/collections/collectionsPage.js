import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import Folder from '../../components/folder/folder';
import ButtonBase from '@material-ui/core/ButtonBase';
import './collectionsPage.scss';

import { useLocation } from 'react-router-dom'

// icons 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


import { openPopup } from '../../actions/popup';
const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   }
})


const CollectionsPage = (props) => {
  const location = useLocation();

  useEffect( ()=> {
   console.log(location.pathname)
 })

   const [showAllCollections, setShowAllCollections] = React.useState(false);
   const innerMenu = useRef(null);

   useEffect(() => {
      function handleClickOutside(event) {
         if (innerMenu.current && !innerMenu.current.contains(event.target)) {
            setShowAllCollections(false)
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [innerMenu]);

   return (
      <div className="mt-12">
         <div className="flex justify-between text-sm mx-10 lg:mx-20">
            <div className="flex items-center text-gray ">
               <div className="relative" ref={innerMenu}>
                  <div className="font-bold text-purple mr-7 cursor-pointer" onClick={() => setShowAllCollections(!showAllCollections)}>All<span>{ showAllCollections ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />  }</span></div>
                  { showAllCollections 
                  ?
                  <div className="innerMenu">
                     <div className="innerMenu__item">Health</div>
                     <div className="innerMenu__item">Cinema</div>
                     <div className="innerMenu__item">Travel</div>
                  </div>
                  : null }
               </div>
               <div className="mr-7">Shared</div>
               <div className="mr-7">Class 5a</div>
               <ButtonBase onClick={() => props.openPopup({ currentPopup: 'AddTag' })}><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Add Tag</div></ButtonBase>
            </div>
            <ButtonBase onClick={() => props.openPopup({ currentPopup: 'CreateCollection' })}><div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300">Create Collection</div></ButtonBase>
         </div>

         <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">

         <NavLink to="/collection1">
            <Folder name="collection 1" type="collection" date="Apr 10, 2020" words="14" learned="10" repeat="2" tags={["health", "diseases"]} count="17 students" />
         </NavLink>

         <NavLink to="/collection1">
            <Folder name="collection 1" type="collection" date="Apr 10, 2020" words="14" learned="10" repeat="2" tags={["health", "diseases"]} count="17 students" />
         </NavLink>


         </div>



      </div>
   )
}

export default connect(
   null,
   mapDispatchToProps
)(CollectionsPage);