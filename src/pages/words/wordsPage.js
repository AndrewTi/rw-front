import React, { useEffect, useRef} from 'react'
import Word from '../../components/word/word'

// styles 
import './wordsPage.scss';

// icons 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import deleteIcon from '../../img/ico/deleteIconPopup.svg';
import closeIcon from '../../img/ico/close.svg';


const WordPage = () => {
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
      <div className="mx-10 lg:mx-20 mt-10">

      <div className="text-dark font-medium text-2xl mt-10 capitalize">Collection 1</div>

         <div className="flex justify-between text-sm mt-5">
            <div className="flex items-center text-gray ">
               <div className="relative" ref={innerMenu}>
                  <div className="font-bold text-purple mr-7 cursor-pointer" onClick={() => setShowAllCollections(!showAllCollections)}>All<span>{ showAllCollections ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />  }</span></div>
                  { showAllCollections 
                  ?
                  <div className="innerMenu ml-1">
                     <div className="innerMenu__item">Health</div>
                     <div className="innerMenu__item">Cinema</div>
                     <div className="innerMenu__item">Travel</div>
                  </div>
                  : null }
               </div>
               <div className="mr-7">Shared</div>
               <div className="mr-7">Class 5a</div>
            </div>
            <div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300 ">Add Word</div>
         </div>

         <div className="mt-8 flex flex-wrap">
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
            <Word />
         </div>

         <div className="selectedPopup">
               <div className="cursor-pointer"><img src={closeIcon}className="selectedPopup__closeBtn"/></div>
               <div className="selectedPopup__numberWords">1</div>
               <div className="text-xs text-white mr-5 ml-2">items selected</div>

               <div className="selectedPopup__btn">Edit</div>
               <div className="selectedPopup__btn">Copy</div>
               <div className="selectedPopup__btn">Create Collection</div>
               <div className="py-2 px-4 bg-brightRed rounded-md hover:bg-darkRed cursor-pointer transition"><img src={deleteIcon}/></div>
         </div>
      </div>
   )
}

export default WordPage
