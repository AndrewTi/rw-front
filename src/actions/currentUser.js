import {
   CURRENT_USER
} from './index';


export const currentUser = (payload) => {
   const { user } = payload;
   return {
       type: CURRENT_USER,
       user,
   }
}