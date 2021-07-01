import React from 'react'
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NavLink } from "react-router-dom";
import Folder from '../../components/folder/folder';

const mapStateToProps = state => ({
   ...state.collections
 });
 
const ClassesPage = (props) => {

   const {
      collections
    } = props;

   return (
      <div className="mt-12">
         <div className="flex justify-between mx-10 lg:mx-20">
            <div className="text-dark font-medium text-2xl capitalize">Classes</div>
            <ButtonBase><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Add Class</div></ButtonBase>
         </div>
         <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">

            {collections.map(collection => {
               return (
                  <NavLink to="/class">
                     <Folder name="5a" type="class" />
                  </NavLink>
               )
            })}

         </div>

      </div>
   )
}

export default connect(
   mapStateToProps,
   null
 )(ClassesPage);