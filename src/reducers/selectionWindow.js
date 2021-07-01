import {
   OPEN_SELECTION_WINDOW,
   CLOSE_SELECTION_WINDOW
} from '../actions';

export default ( state = {
   showSelectionWindow: false,
   info: {}
}, action) => {

   const {
      info
   } = action;

   switch (action.type) {
      case OPEN_SELECTION_WINDOW:
         {
         return {
            ...state,
            showSelectionWindow: true,
            info: info
         }
      }

      case CLOSE_SELECTION_WINDOW: {
         return {
            ...state,
            showSelectionWindow: false
         }

      }

      default:
            return state;
   }
}