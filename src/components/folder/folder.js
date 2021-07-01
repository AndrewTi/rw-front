import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import CircularProgressbarComponent from '../../components/circularProgressbar/circularProgressbar'
import moment from 'moment';
import { deleteCollectionReq } from '../../service/requests';

//styles
import './folder.scss'

//icons 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import rightBottomArrow from '../../img/ico/right-bottom-arrow.svg'
import attachFile from '../../img/ico/attachFile.svg';

import folderTag from '../../img/folderTag.svg';

import { openPopup } from '../../actions/popup';
import { deleteCollection } from '../../actions/collections';
const mapStateToProps = state => ({
   ...state.popups
});

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   },
   deleteCollection: (payload) => {
      return dispatch(deleteCollection(payload));
   },
})


const Folder = (props) => {
   const { 
      collection, 
      type,
      deleteCollection,
      tags
    } = props;

   const [moreAction, setMoreAction] = React.useState(false);
   const moreActionMenu = useRef(null);

   useEffect(() => {
      function handleClickOutside(event) {

         if (moreActionMenu.current && !moreActionMenu.current.contains(event.target)) {
            setMoreAction(false)
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [moreActionMenu]);

   const openMoreAction = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setMoreAction(!moreAction)
   }

   const closeMoreAction = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setMoreAction(false)
   }

   const showFolderContent = () => {
      if (type === "class") {
         return (
            <div className="text-dark flex flex-col justify-between h-36">
               <div className="absolute top-4 right-2" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div className="text-lg mt-2">{props.name}</div>
               <div className="flex justify-between">
                  <div className="text-sm text-gray font-light">17 students</div>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (type === "classCollection") {
         return (
            <div className="text-dark flex flex-col justify-between h-36">
               <div className="absolute top-4 right-2" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div>
                  <div className="text-xs text-gray">{collection.updatedAt}</div>
                  <div className="text-lg mt-2">{collection.name}</div>
               </div>
               <div className="flex justify-between">
                  <div className="text-sm text-gray font-light">{collection.words} words</div>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (type === "collection") {

         return (
            <div className="text-dark flex flex-col justify-between">
               <div className="absolute top-4 right-2" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div>
                  <div className="text-xs text-gray">{moment(collection.updatedAt).format("DD MMM yyy")} </div>
                  <div className="text-lg mt-2">{collection.name}</div>
               </div>

               <div className="flex justify-between mt-2 opacity-40">
                  <div className="flex-column text-center">
                     <div className="text-lg">{collection.words.length}</div>
                     <div className="text-sm text-gray font-light">words</div>
                  </div>

                  <div className="flex-column text-center">
                     <div className="text-lg">6</div>
                     <div className="text-sm text-gray font-light">Learned</div>
                  </div>

                  <div className="flex-column text-center">
                     <div className="text-lg">10</div>
                     <div className="text-sm text-gray font-light">Repeat</div>
                  </div>
               </div>

               <div>

                  <hr className="border-t-1 border-lightGray mt-3" />
                     <div className="flex mt-2.5 flex-wrap">
                        {collection.tags.length > 0 
                        ? collection.tags.map(tag => {
                           return(
                              <div className="mt-1 bg-darkPurple px-3 py-1 text-white capitalize text-xs rounded-full mr-1.5">{tag.name}</div>
                              )
                           })
                        : <div className="bg-lightGray px-3 py-1 text-white capitalize text-xs rounded-full mr-1.5">no tags</div>
                        }
                  </div>
               </div>
            </div>
         )
      }

      else if (type === "recentlyCollection") {
         return (
            <div className="text-dark flex flex-col justify-between">
               <div className="mt-2">
                  <div className="text-sm text-gray">{props.tag}</div>
                  <div className="text-lg mt-2">{collection.name}</div>
               </div>
               <div className="flex justify-between items-end py-2 mt-2">
                  <CircularProgressbarComponent percentage="30"/>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (type === 'support') {
         return (
            <div className="text-dark flex flex-col justify-between  h-36">
               <div>
                  <div className="text-xs text-gray">{props.date}</div>
                  <div className="text-lg font-medium mt-2">{props.name}</div>
                  <div className="text-xs mt-2">{props.shortDesc}</div>
               </div>
               <div className="mb-2">
                 <img src={attachFile} />
               </div>
            </div>
         )
      }
   }

   const onDeleteCollection = async () => {
      try {
         await deleteCollectionReq(collection._id)
         deleteCollection({ collection: collection._id })
      }
      catch (error) {
         console.log(error)
      }
      setMoreAction(false)
   }

   return (
      <div className="folder">
         <img src={folderTag} className="folder__tag" />

         {showFolderContent()}

         { moreAction
            ?
            <div className="moreAction cursor-default text-dark" ref={moreActionMenu} onClick={(e) => e.preventDefault()}>
               <div className="absolute top-3 right-2 cursor-pointer" onClick={(e) => closeMoreAction(e)}><CloseRoundedIcon /></div>
               <div className="moreAction__buttons">
                  <div className="flex justify-between">
                     <div className="moreAction__btn moreAction__btnEdit" onClick={() => props.openPopup({ currentPopup: 'EditCollection', info: { collection: collection, allTags: tags } })}>
                        <EditOutlinedIcon className="moreAction__icon moreAction__iconEdit" />
                        <div className="moreAction__textEdit text-xs transition">Edit</div>
                     </div>
                     <div className="moreAction__btn moreAction__btnShare" onClick={() => props.openPopup({ currentPopup: 'ShareCollection' })}>
                        <ScreenShareOutlinedIcon className="moreAction__icon moreAction__iconShare" />
                        <div className="moreAction__textShare text-xs transition">Share</div>
                     </div>
                  </div>
                  <div className="flex justify-between mt-5">
                     <div className="moreAction__btn moreAction__btnLoad" onClick={() => props.openPopup({ currentPopup: 'LoadCollection' })}>
                        <SystemUpdateAltOutlinedIcon className="moreAction__icon moreAction__iconLoad" />
                        <div className="moreAction__textLoad text-xs transition">Load</div>
                     </div>
                     <div className="moreAction__btn moreAction__btnDelete" onClick={onDeleteCollection}>
                        <DeleteOutlineRoundedIcon className="moreAction__icon moreAction__iconDelete" />
                        <div className="moreAction__textDelete text-xs transition">Delete</div>
                     </div>
                  </div>
               </div>
            </div>
            : null
         }
      </div>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Folder);