import {
   SET_COLLECTIONS,
   ADD_COLLECTION,
   UPDATE_COLLECTION,
   DELETE_COLLECTION
} from '../actions';

export default ( state = {
   collections: [],
}, action) => {

   const {
      collections,
      collection
   } = action;

   switch (action.type) {
      
      case SET_COLLECTIONS: {
         return {
            ...state,
            collections: collections
         }
      }

      case ADD_COLLECTION: {
         return {
            ...state,
            collections: [...state.collections, collection]
         }

      }
      
      case UPDATE_COLLECTION: {
         let updatedCollection = state.collections.find(x => x._id === collection._id);

         return {
            ...state, 
            collections: [...state.collections.filter(x => x !== updatedCollection), collection]
         }
      }
      
      case DELETE_COLLECTION: {

         let deletedCollection = state.collections.find(x => x._id === collection);
         return {
            ...state,
            collections: [...state.collections.filter(x => x !== deletedCollection)]
         }

      }

      default:
            return state;
   }
}