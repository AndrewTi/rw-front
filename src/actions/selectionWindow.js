import {
   OPEN_SELECTION_WINDOW,
   CLOSE_SELECTION_WINDOW
} from './index';


export const openSelectionWindow = (payload) => {
   const { info } = payload;
   return {
       type: OPEN_SELECTION_WINDOW,
       info
   }
}

export const closeSelectionWindow = () => {
   return {
       type: CLOSE_SELECTION_WINDOW
   }
}