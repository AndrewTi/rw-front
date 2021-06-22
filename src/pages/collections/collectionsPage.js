import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import Folder from '../../components/folder/folder';
import ButtonBase from '@material-ui/core/ButtonBase';
import './collectionsPage.scss';

// icons 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { deleteTagReq, getCollectionById } from '../../service/requests';

import { openPopup } from '../../actions/popup';
import { deleteTag } from '../../actions/tags';

const mapStateToProps = state => ({
   ...state.collections,
   ...state.tags
 });

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   },
   deleteTag: (payload) => {
      return dispatch(deleteTag(payload));
   }
})


const CollectionsPage = (props) => {

   const {
      openPopup,
      collections,
      tags,
      deleteTag
   } = props;

   const [showAllTags, setShowAllTags] = useState(false);
   const [tagss, setTagss] = useState(tags);
   const innerMenu = useRef(null);

   useEffect(() => {
      setTagss(tags);
   }, [tags])

   useEffect(() => {
      function handleClickOutside(event) {
         if (innerMenu.current && !innerMenu.current.contains(event.target)) {
            setShowAllTags(false)
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [innerMenu]);

   const onDeleteTag = async (id) => {

      try {
         deleteTag({ tag: id })
         await deleteTagReq(id)
      }
      catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="mt-12">
         <div className="flex justify-between text-sm mx-10 lg:mx-20">

            <div className="flex items-center text-gray ">

               <div className="relative" ref={innerMenu}>
                  <div className="font-bold text-purple mr-7 cursor-pointer" onClick={() => setShowAllTags(!showAllTags)}>All<span>{showAllTags ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span></div>

                  {showAllTags
                     ?
                     <div className="innerMenu">
                        {tagss.map(tag => {
                           return (
                              <div className="innerMenu__item">
                                 <span>{tag.name}</span>
                                 <span className="innerMenu__deleteIcon" onClick={() => onDeleteTag(tag._id)} ><CloseRoundedIcon /></span>
                              </div>
                           )
                        })}
                     </div>
                     : null}

               </div>

               {tagss.slice(0, 3).map(tag => {
                  return (
                     <div className="collectionPage__tag">{tag.name}</div>
                  )
               })}

               <ButtonBase onClick={() => openPopup({ currentPopup: 'AddTag' })}><div className="ml-10 px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Add Tag</div></ButtonBase>
            </div>
            <ButtonBase onClick={() => openPopup({ currentPopup: 'CreateCollection' })}><div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300">Create Collection</div></ButtonBase>
         </div>

         <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">

            {collections.map(collection => {
               return (
                  <NavLink to="/collection1">
                     <Folder collection={collection} type="collection" />
                  </NavLink>
                  )
            })}

         </div>



      </div>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CollectionsPage);