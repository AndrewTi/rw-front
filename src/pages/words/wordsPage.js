import React, { useEffect, useRef} from 'react'
import { connect } from 'react-redux';
import Word from '../../components/word/word'

// styles 
import './wordsPage.scss';

// icons 
import deleteIcon from '../../img/ico/deleteIconPopup.svg';
import closeIcon from '../../img/ico/close.svg';

import { openPopup } from '../../actions/popup';

const mapStateToProps = state => ({
   ...state.popups
});

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   }
})


const WordsPage = (props) => {
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

         <div className="flex justify-end text-sm mt-5">
            <div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300" onClick={() => props.openPopup({ currentPopup: "AddWord" })}>Add Word</div>
         </div>

         <div className="mt-8 flex flex-wrap">
            <Word isSelected={false} word="facilitate" translation="сприяти" synonyms={["easy", "lighten", "relieve"]}/>
            <Word isSelected={false} word="facilitate" translation="сприяти" synonyms={["easy", "lighten", "relieve"]}/>
            <Word isSelected={false} word="facilitate" translation="сприяти" synonyms={["easy", "lighten", "relieve"]}/>
            <Word isSelected={false} word="facilitate" translation="сприяти" synonyms={["easy", "lighten", "relieve"]}/>
            <Word isSelected={false} word="facilitate" translation="сприяти" synonyms={["easy", "lighten", "relieve"]}/>
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

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WordsPage);
