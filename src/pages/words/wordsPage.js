import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux';
import Word from '../../components/word/word';

// styles 
import './wordsPage.scss';

import { openPopup } from '../../actions/popup';
import { openSelectionWindow, closeSelectionWindow } from '../../actions/selectionWindow';

const mapStateToProps = state => ({
   ...state.selectionWindow
});

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   },
   openSelectionWindow: (payload) => {
      return dispatch(openSelectionWindow(payload));
   },
   closeSelectionWindow: (payload) => {
      return dispatch(closeSelectionWindow(payload));
   }
})

const WordsPage = (props) => {

   const {
      openPopup,
      openSelectionWindow,
      closeSelectionWindow,
      showSelectionWindow
   } = props;

   const [words, setWords] = useState([
      {word: "facilitate", translation: "сприяти", synonyms: ["easy", "lighten", "relieve"]},
      {word: "hello", translation: "привіт", synonyms: ["hi", "welcome"]},
   ]);

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

   useEffect(()=> {
      if(!showSelectionWindow) {
         unCheckWords()
      }
   }, [showSelectionWindow])

   const selectWord = (word) => {
      const updatedWords = words.map(x => {
         if (x.word === word.word) {
            x.checked = !x.checked
         }
         return x;
      });
      setWords(updatedWords);

      if(words.filter(word => word.checked === true).length > 0 ) {
         openSelectionWindow({info: {words: words.filter(word => word.checked === true)}});
      } else {
         closeSelectionWindow()
      }
   }

   return (
      <div className="mx-10 lg:mx-20 mt-10">
         <div className="text-dark font-medium text-2xl mt-10 capitalize">Collection 1</div>
         <div className="flex justify-end text-sm mt-5">
            <div className="px-5 py-1.5 bg-orange text-white rounded-md cursor-pointer hover:bg-darkOrange transition ease-in-out duration-300" onClick={() => openPopup({ currentPopup: "AddWord" })}>Add Word</div>
         </div>

         <div className="mt-8 flex flex-wrap">
            {words.map(word => <div onClick={() => selectWord(word)}><Word isSelected={word.checked} word={word.word} translation={word.translation} synonyms={word.synonyms} /></div>)}
         </div>
         
      </div>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WordsPage);
