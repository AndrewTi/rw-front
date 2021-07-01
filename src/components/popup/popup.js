import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import EditCollection from '../popups/editCollection/editCollection';
import ShareCollection from '../popups/shareCollection/shareCollection';
import LoadCollection from '../popups/loadCollection/loadCollection';
import AddStudent from '../popups/addStudent/addStudent';
import Student from '../popups/student/student';
import AddWord from '../popups/addWord/addWord';
import CreateCollection from '../popups/createCollection/createCollection';
import AddTag from '../popups/addTag';
import Request from '../popups/request/request'; 
import CreateRequest from '../popups/createRequest/createRequest';

// icons
import closeIcon from '../../img/ico/closeIcon.svg'


import {
   closePopup,
} from '../../actions/popup';

const mapStateToProps = state => ({
   ...state.popups
});

const mapDispatchToProps = dispatch => ({
   closePopup: () => {
      return dispatch(closePopup());
   },
})

const Popup = (props) => {
   
   const handleClose = () => {
      props.closePopup();
   }
   
   const map = {
      "EditCollection": EditCollection,
      "ShareCollection": ShareCollection,
      "LoadCollection": LoadCollection,
      "AddStudent": AddStudent,
      "Student": Student,
      "AddWord": AddWord,
      "CreateCollection": CreateCollection,
      'AddTag': AddTag,
      'Request': Request,
      'CreateRequest': CreateRequest,
    }


   const CurrentPopup = map[props.currentPopup];

   
   return (
      
      <Dialog
         open={props.showPopup}
         onClose={handleClose}
         maxWidth="lg"
         className="dialog"
      >
         <DialogContent className="dialog">
            <img src={closeIcon} alt="" onClick={handleClose} className='absolute top-6 right-6 cursor-pointer'/>
            <CurrentPopup info={props.info}/>
         </DialogContent>

      </Dialog>
   )
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Popup);