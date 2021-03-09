import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';

//styles
import './folder.scss'

//images 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import folder from '../../img/folder.svg'

// import editIcon from '../../img/ico/edit.svg'
// import loadIcon from '../../img/ico/load.svg'
// import shareIcon from '../../img/ico/share.svg'
// import deleteIcon from '../../img/ico/delete.svg'

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

import { openPopup } from '../../actions/popup';
const mapStateToProps = state => ({
   ...state.popups
});

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   }
})


const Folder = (props) => {
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
      setMoreAction(!moreAction)
   }

   const closeMoreAction = (e) => {
      e.stopPropagation();
      setMoreAction(false)
   }


   return (
      <div className="relative cursor-pointer w-max">
               <img src={folder} className="" />
               <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark">
                  <div className="text-xs text-gray">Apr 10, 2020</div>
                  <div className="text-lg mt-2">Human body</div>
                  <div className="absolute top-12 right-8" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open"/></div>

                  <div className="flex justify-between mt-2">
                     <div className="flex-column text-center">
                        <div className="text-lg">20</div>
                        <div className="text-sm text-gray font-light">words</div>
                     </div>

                     <div className="flex-column text-center">
                        <div className="text-lg">6</div>
                        <div className="text-sm text-gray font-light">Learned</div>
                     </div>

                     <div className="flex-column text-center">
                        <div className="text-lg">8</div>
                        <div className="text-sm text-gray font-light">Repeat</div>
                     </div>
                  </div>

                 <hr className="border-t-1 border-lightGray mt-3"/>

                 <div className="flex mt-2.5">
                    <div className="bg-darkPurple px-3 py-1 text-white capitalize text-xs rounded-full mr-1.5">health</div>
                    <div className="bg-darkPurple px-3 py-1 text-white capitalize text-xs rounded-full mr-1.5">home</div>
                 </div>
               </div>
               
               { moreAction
               ?
               <div className="moreAction cursor-default text-dark" ref={moreActionMenu}>
                  <div className="absolute top-3 right-2 cursor-pointer" onClick={(e) => closeMoreAction(e)}><CloseRoundedIcon/></div>
                     <div className="flex justify-between">
                        <div className="moreAction__btn moreAction__btnEdit" onClick={() => props.openPopup({ currentPopup: 'EditCollection' })}>
                           <EditOutlinedIcon className="moreAction__icon moreAction__iconEdit"/>
                           <div className="moreAction__textEdit text-xs transition">Edit</div>
                        </div>
                        <div className="moreAction__btn moreAction__btnShare" onClick={() => props.openPopup({ currentPopup: 'ShareCollection' })}>
                           <ScreenShareOutlinedIcon className="moreAction__icon moreAction__iconShare" />
                           <div className="moreAction__textShare text-xs transition">Share</div>
                        </div>
                     </div>
                     <div className="flex justify-between mt-5">
                        <div className="moreAction__btn moreAction__btnLoad">
                           <SystemUpdateAltOutlinedIcon className="moreAction__icon moreAction__iconLoad"/>
                           <div className="moreAction__textLoad text-xs transition">Load</div>
                        </div>
                        <div className="moreAction__btn moreAction__btnDelete">
                           <DeleteOutlineRoundedIcon className="moreAction__icon moreAction__iconDelete"/>
                           <div className="moreAction__textDelete text-xs transition">Delete</div>
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