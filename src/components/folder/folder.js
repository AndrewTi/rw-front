import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import CircularProgressbarComponent from '../../components/circularProgressbar/circularProgressbar'

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
   const [folderHover, setFolderHover] = React.useState(false)
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
      if (props.type === "class") {
         return (
            <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark flex flex-col justify-between">
               <div className="absolute top-12 right-8" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div className="text-lg mt-2">{props.name}</div>
               <div className="flex justify-between">
                  <div className="text-sm text-gray font-light">{props.students} students</div>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (props.type === "classCollection") {
         return (
            <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark flex flex-col justify-between">
               <div className="absolute top-12 right-8" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div>
                  <div className="text-xs text-gray">{props.date}</div>
                  <div className="text-lg mt-2">{props.name}</div>
               </div>
               <div className="flex justify-between">
                  <div className="text-sm text-gray font-light">{props.words} words</div>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (props.type === "collection") {

         return (
            <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark flex flex-col justify-between">
               <div className="absolute top-12 right-8" onClick={(e) => openMoreAction(e)}><MoreVertIcon className="moreActionBtn--open" /></div>
               <div>
                  <div className="text-xs text-gray">{props.date}</div>
                  <div className="text-lg mt-2">{props.name}</div>
               </div>

               <div className="flex justify-between mt-2">
                  <div className="flex-column text-center">
                     <div className="text-lg">{props.words}</div>
                     <div className="text-sm text-gray font-light">words</div>
                  </div>

                  <div className="flex-column text-center">
                     <div className="text-lg">{props.learned}</div>
                     <div className="text-sm text-gray font-light">Learned</div>
                  </div>

                  <div className="flex-column text-center">
                     <div className="text-lg">{props.repeat}</div>
                     <div className="text-sm text-gray font-light">Repeat</div>
                  </div>
               </div>

               <div>

                  <hr className="border-t-1 border-lightGray mt-3" />
                     <div className="flex mt-2.5">
                     {props.tags.map(tag => {
                        return(
                           <div className="bg-darkPurple px-3 py-1 text-white capitalize text-xs rounded-full mr-1.5">{tag}</div>
                        )
                     })}
                  </div>
               </div>
            </div>
         )
      }

      else if (props.type === "recentlyCollection") {
         return (
            <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark flex flex-col justify-between">
               <div className="mt-2">
                  <div className="text-sm text-gray">{props.tag}</div>
                  <div className="text-lg mt-2">{props.name}</div>
               </div>
               <div className="flex justify-between items-end py-2">
                  <CircularProgressbarComponent percentage={props.percentage}/>
                  <img src={rightBottomArrow} />
               </div>
            </div>
         )
      }

      else if (props.type === 'support') {
         return (
            <div className="absolute top-0 left-0 w-full h-full py-10 pl-10 pr-12 text-dark flex flex-col justify-between">
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

   return (
      <div className="relative cursor-pointer w-max" onMouseEnter={() => setFolderHover(true)} onMouseLeave={() => setFolderHover(false)}>
         <svg width="277" height="237" viewBox="0 0 277 237" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
               <path d="M20 192V37C20 27.6112 27.6112 20 37 20H103.275C107.595 20 111.754 21.645 114.905 24.6007L121.595 30.8757C124.746 33.8314 128.905 35.4764 133.225 35.4764H232C241.389 35.4764 249 43.0876 249 52.4764V192C249 201.389 241.389 209 232 209H37C27.6112 209 20 201.389 20 192Z" fill="white" stroke={folderHover ? "#6A75CA" : "none"} stroke-width="1.5" />
            </g>
            <defs>
               <filter id="filter0_d" x="0" y="0" width="277" height="237" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="12" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.027451 0 0 0 0 0.101961 0 0 0 0.18 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
               </filter>
            </defs>
         </svg>

         {showFolderContent()}

         { moreAction
            ?
            <div className="moreAction cursor-default text-dark" ref={moreActionMenu} onClick={(e) => e.preventDefault()}>
               <div className="absolute top-3 right-2 cursor-pointer" onClick={(e) => closeMoreAction(e)}><CloseRoundedIcon /></div>
               <div className="flex justify-between">
                  <div className="moreAction__btn moreAction__btnEdit" onClick={() => props.openPopup({currentPopup: 'EditCollection'})}>
                     <EditOutlinedIcon className="moreAction__icon moreAction__iconEdit" />
                     <div className="moreAction__textEdit text-xs transition">Edit</div>
                  </div>
                  <div className="moreAction__btn moreAction__btnShare" onClick={() => props.openPopup({currentPopup: 'ShareCollection'})}>
                     <ScreenShareOutlinedIcon className="moreAction__icon moreAction__iconShare" />
                     <div className="moreAction__textShare text-xs transition">Share</div>
                  </div>
               </div>
               <div className="flex justify-between mt-5">
                  <div className="moreAction__btn moreAction__btnLoad" onClick={() => props.openPopup({currentPopup: 'LoadCollection'})}>
                     <SystemUpdateAltOutlinedIcon className="moreAction__icon moreAction__iconLoad" />
                     <div className="moreAction__textLoad text-xs transition">Load</div>
                  </div>
                  <div className="moreAction__btn moreAction__btnDelete">
                     <DeleteOutlineRoundedIcon className="moreAction__icon moreAction__iconDelete" />
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