import {
   SET_COLLECTIONS,
   ADD_COLLECTION,
   UPDATE_COLLECTION,
   DELETE_COLLECTION
} from './index';


export const setCollections = (payload) => {
   const { collections } = payload;
   return {
       type: SET_COLLECTIONS,
       collections
   }
}

export const addCollection = (payload) => {
   const { collection } = payload;
   return {
       type: ADD_COLLECTION,
       collection
   }
}

export const updateCollection = (payload) => {
   const { collection } = payload;
   return {
       type: UPDATE_COLLECTION,
       collection
   }
}

export const deleteCollection = (payload) => {
   const { collection } = payload;
   return {
       type: DELETE_COLLECTION,
       collection
   }
}
