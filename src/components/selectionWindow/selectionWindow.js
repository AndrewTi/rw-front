import React from 'react';
import { connect } from 'react-redux';
import './selectionWindow.scss';

import AddRoundedIcon from '@material-ui/icons/AddRounded';

// icons 
import deleteIcon from '../../img/ico/deleteIconPopup.svg';
import closeIcon from '../../img/ico/close.svg';

import {
   closeSelectionWindow,
} from '../../actions/selectionWindow';

const mapStateToProps = state => ({
   ...state.selectionWindow
});

const mapDispatchToProps = dispatch => ({
   closeSelectionWindow: () => {
      return dispatch(closeSelectionWindow());
   },
})

const SelectionWindow = (props) => {

   const {
      showSelectionWindow,
      closeSelectionWindow,
      info
   } = props;

   const items = info.words;

   return (
      <>
         {showSelectionWindow &&
            <div className="selectedPopup">
               <div className="flex">
                  <div className="cursor-pointer p-1 flex items-center" onClick={() => closeSelectionWindow()}><img src={closeIcon} className="selectedPopup__closeBtn" /></div>
                  <div className="selectedPopup__numberWords">{items.length}</div>
                  <div className="text-xs text-white mr-5 ml-2">{items.length === 1 ? "item" : "items"} selected</div>
               </div>
               <div className="flex">
                  <div className="selectedPopup__btn"><AddRoundedIcon fontSize="small" className="mr-2" />Add To Collection</div>
                  <div className="py-2 px-4 bg-brightRed rounded-md hover:bg-darkRed cursor-pointer transition"><img src={deleteIcon} /></div>
               </div>
            </div>
         }
      </>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SelectionWindow);