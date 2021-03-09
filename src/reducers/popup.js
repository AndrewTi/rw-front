import {
   OPEN_POPUP,
   CLOSE_POPUP
} from '../actions';

export default ( state = {
   showPopup: false,
   currentPopup: '',
   info: {}
}, action) => {

   const {
      currentPopup,
      info
   } = action;

   switch (action.type) {
      case OPEN_POPUP:
         {
         return {
            ...state,
            showPopup: true,
            currentPopup: currentPopup,
            info: info
         }
      }

      case CLOSE_POPUP: {
         return {
            ...state,
            showPopup: false
         }

      }

      default:
            return state;
   }
}