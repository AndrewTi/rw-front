import {
   SET_TAGS,
   ADD_TAG,
   UPDATE_TAG,
   DELETE_TAG
} from './index';


export const setTags = (payload) => {
   const { tags } = payload;
   return {
       type: SET_TAGS,
       tags
   }
}

export const addTag = (payload) => {
   const { tag } = payload;
   return {
       type: ADD_TAG,
       tag
   }
}

export const updateTag = (payload) => {
   const { tag } = payload;
   return {
       type: UPDATE_TAG,
       tag
   }
}

export const deleteTag = (payload) => {
   const { tag } = payload;
   return {
       type: DELETE_TAG,
       tag
   }
}
