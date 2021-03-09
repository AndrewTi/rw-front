import {
   OPEN_POPUP,
   CLOSE_POPUP
} from './index';


export const openPopup = (payload) => {
   const { currentPopup, info } = payload;
   return {
       type: OPEN_POPUP,
       currentPopup, 
       info
       
   }
}

export const closePopup = () => {
   return {
       type: CLOSE_POPUP
   }
}