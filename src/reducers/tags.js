import {
   SET_TAGS,
   ADD_TAG,
   UPDATE_TAG,
   DELETE_TAG
} from '../actions';

export default ( state = {
   tags: [],
}, action) => {

   const {
      tags,
      tag
   } = action;

   switch (action.type) {
      
      case SET_TAGS: {
         return {
            ...state,
            tags: tags
         }
      }

      case ADD_TAG: {
         return {
            ...state,
            tags: [...state.tags, tag]
         }

      }
      
      case UPDATE_TAG: {
         let updatedTag = state.tags.find(x => x._id === tag._id);

         return {
            ...state, 
            tags: [...state.tags.filter(x => x !== updatedTag), tag]
         }
      }
      
      case DELETE_TAG: {

         let deletedTag = state.tags.find(x => x._id === tag);
         return {
            ...state,
            tags: [...state.tags.filter(x => x !== deletedTag)]
         }

      }

      default:
            return state;
   }
}