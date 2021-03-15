import React,{ useEffect, useRef} from 'react'

// styles
import './word.scss'

// icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';


const Word = (props) => {
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
      <div className="wordWrapper">
         <div className={props.isSelected ? "word--selected" : "word"}>
         <div className="cursor-pointer absolute top-3 right-1" onClick={(e) => openMoreAction(e)}><MoreVertIcon className={props.isSelected ? "moreActionBtn--open-Active" : "moreActionBtn--open"} /></div>
         <div>
            <div className="flex items-center">
               <div className="h-2 w-2 bg-green rounded-full"></div>
               <div className={props.isSelected ? "text-white text-lg ml-2" : "text-black text-lg ml-2"}>{props.word}</div>
            </div>
            <div className={props.isSelected ? "text-lightPurple" : "text-textDarkGray"}>
               <div className="text-base ml-4 font-light">{props.translation}</div>
            </div>
         </div>

         <div className={props.isSelected ? "text-lightPurple" : "text-textDarkGray"}>
            <div className="text-sm italic font-light">Synonyms</div>
            <hr className={props.isSelected ? "border-t-1 border-purpleMedium mt-1" : "border-t-1 border-lightGray mt-1"} />
            <div className="flex font-light mt-1 flex-wrap text-sm">

            {props.synonyms.map(item => <div className="mr-2">{item},</div> )}

            </div>
         </div>
         </div>

         { moreAction
            ?
            <div className={props.isSelected ? "moreActionWord text-white" : "moreActionWord text-darkGray"} ref={moreActionMenu}>
               <div className="absolute top-3 right-2 cursor-pointer" onClick={(e) => closeMoreAction(e)}><CloseRoundedIcon/></div>
                  <div className={props.isSelected ? "flex w-max items-center cursor-pointer" : "flex w-max items-center moreAction__btnAdd cursor-pointer"} >
                     <AddCircleOutlineOutlinedIcon fontSize="small" className="moreAction__iconAdd moreAction__icon"/>
                     <div className="text-sm ml-2 moreAction__textAdd transition">Add to the collection</div>
                  </div>

                  <div className= {props.isSelected ? "flex w-max items-center cursor-pointer" : "flex w-max items-center moreAction__btnFix cursor-pointer"}>
                     <EditOutlinedIcon fontSize="small" className="moreAction__iconFix moreAction__icon"/>
                     <div className="text-sm ml-2 moreAction__textFix transition">Fix translation</div>
                  </div>

                  <div className={props.isSelected ? "flex w-max items-center cursor-pointer" : "flex w-max items-center moreAction__btnDelete cursor-pointer"}>
                     <DeleteOutlineRoundedIcon fontSize="small" className="moreAction__iconDelete moreAction__icon"/>
                     <div className="text-sm ml-2 moreAction__textDelete transition">Delete</div>
                  </div>
               </div>
            : null
         }
      </div>
   )
}

export default Word
