import React from 'react'
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';

import { addCollectionReq, addTagReq, getCollectionById } from '../../../service/requests';

// icons 
import deleteTag from '../../../img/ico/deleteTag.svg'


import { closePopup } from '../../../actions/popup';
import { addCollection } from '../../../actions/collections';
import { addTag } from '../../../actions/tags';

const mapDispatchToProps = dispatch => ({
   closePopup: () => {
      return dispatch(closePopup());
   },
   addCollection: (payload) => {
     return dispatch(addCollection(payload));
   },
   addTag: (payload) => {
      return dispatch(addTag(payload));
    },
 })


const CreateCollection = (props) => {

   const {
      closePopup, 
      addCollection,
      addTag
   } = props;

   const [collection, setCollection] = React.useState({ name: "" })
   const [tags, setTags] = React.useState([])
   
   const [nameError, setNameError] = React.useState(false);
   
   const handleKeyDown = (e) => {
      if (e.key === 'Enter' && e.target.value != "") {
         let updatedTags = [...tags, e.target.value];
         setTags(updatedTags)
         e.target.value = ""
      }
   }
   
   const onTagDelete = (tag) => {
      let updatedTags = tags.filter(x => x != tag);
      setTags(updatedTags)
   }

   const createCollection = async () => {
      if (!collection.name) {
         setNameError(true)
         return;
      }

      try {
         const respCollection = await addCollectionReq(collection);
         closePopup();
         
         if(tags) {
            const respTags = await addTagReq({name: tags[0], collectionId: respCollection.data.collection._id})
            addTag({tag: respTags.data.tag});
            const respCurrentCollection = await getCollectionById(respCollection.data.collection._id)
            addCollection({ collection: respCurrentCollection.data.collection });

         } else {
            addCollection({ collection: respCollection.data.collection });
         }
       }
 
       catch (error) {
         console.log(error)
       }
     }

   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Create collection</div>
         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-sm">Name</label>
            <input type="text" id="name" className={nameError ? "popupInput--error" : "popupInput"} onChange={e => setCollection({...collection, name: e.target.value})} />
         </div>

         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-sm">Tags</label>
            <input className="popupInput" onKeyDown={(e) => handleKeyDown(e)}></input>
         </div>

         <div className="flex mt-2 mb-4 flex-wrap">

         {tags.map(tag => {
            return (
               <div className="flex items-center rounded-md bg-brightLightPurple w-max px-2 py-0.5 my-1 mr-2 cursor-pointer transition border border-brightLightPurple hover:border-1 hover:border-purple">
                  <div className="text-purple text-xs">{tag}</div>
                  <img src={deleteTag} className="ml-2"  onClick={() => onTagDelete(tag)}/>
               </div>
            )
         })}
           
         </div>

         <div className="mx-auto w-min rounded-lg overflow-hidden">
            <ButtonBase><div onClick={createCollection} className="mx-auto bg-darkPurple text-sm text-white py-2 px-7 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Create</div></ButtonBase>
         </div>
      </section>
   )
}

export default connect(
   null,
   mapDispatchToProps
 )(CreateCollection);
