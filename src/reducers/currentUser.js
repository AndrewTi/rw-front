import {
   CURRENT_USER
} from '../actions';

export default ( state = {
   user: {},
}, action) => {

   const {
      user,
   } = action;

   switch (action.type) {
      case CURRENT_USER:
         {
            return {
               ...state,
               user: user,
            }
      }
      
      default:
         return state;
      }
}