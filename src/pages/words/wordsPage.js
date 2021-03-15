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

   const [words, setWords] = React.useState([
      {word: "facilitate", translation: "сприяти", synonyms: ["easy", "lighten", "relieve"]},
      {word: "hello", translation: "привіт", synonyms: ["hi", "welcome"]},
      {word: "test", translation: "тест", synonyms: ["test", "work"]},
      {word: "friend", translation: "друг", synonyms: ["friend", "hello"]},
   ])

   const unCheckWords = () => {
      const updatedWords = words.map(x => {
         x.checked = false;
         return x;
      })
      setWords(updatedWords);
   }

   useEffect(() => {
      unCheckWords()
   }, []);

   const selectWord = (word) => {
      const updatedWords = words.map(x => {
         if (x.word === word.word) {
            x.checked = !x.checked
         }
         return x;
      });
      setWords(updatedWords);
   }  

   const closeSelectedPopup = () => {
      unCheckWords()
   }

   const selectedPopup = () => {
      if(words.filter(word => word.checked === true).length > 0) {

         return (
            <div className="selectedPopup">
               <div className="cursor-pointer" onClick={() => closeSelectedPopup()}><img src={closeIcon}className="selectedPopup__closeBtn"/></div>
               <div className="selectedPopup__numberWords">{words.filter(word => word.checked === true).length}</div>
               <div className="text-xs text-white mr-5 ml-2">items selected</div>

               <div className="selectedPopup__btn">Edit</div>
               <div className="selectedPopup__btn">Copy</div>
               <div className="selectedPopup__btn">Create Collection</div>
               <div className="py-2 px-4 bg-brightRed rounded-md hover:bg-darkRed cursor-pointer transition"><img src={deleteIcon}/></div>
         </div>
      )
   }
   }


   return (
      <div className="mx-10 lg:mx-20 mt-10">

      <div className="text-dark font-medium text-2xl mt-10 capitalize">Collection 1</div>

         <div className="flex justify-end text-sm mt-5">
            <div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300" onClick={() => props.openPopup({ currentPopup: "AddWord" })}>Add Word</div>
         </div>

         <div className="mt-8 flex flex-wrap">
            { words.map(word => <div onClick={() => selectWord(word)}><Word isSelected={word.checked} word={word.word} translation={word.translation} synonyms={word.synonyms} /></div> )}
         </div>

         {selectedPopup()}

      </div>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WordsPage);
