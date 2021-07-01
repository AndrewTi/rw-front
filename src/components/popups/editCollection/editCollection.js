import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './editCollection.scss';

import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { 
   updateCollectionReq, 
   deleteTagsFromCollection, 
   addTagsToCollection, 
   getCollectionById,
   getTags } from '../../../service/requests';

// icons 
import deleteTag from '../../../img/ico/deleteTag.svg'
import { setTags } from '../../../actions/tags';

import { closePopup } from '../../../actions/popup';
import { updateCollection } from '../../../actions/collections';

const mapDispatchToProps = dispatch => ({
   closePopup: () => {
      return dispatch(closePopup());
   },
   updateCollection: (payload) => {
     return dispatch(updateCollection(payload));
   },
   setTags: (payload) => {
      return dispatch(setTags(payload));
   }
 });


const EditCollection = (props) => {
   const {
      info,
      updateCollection,
      closePopup,
      setTags
   } = props;

   const [name, setName] = useState(info.collection.name);
   const [collectionsTags, setCollectionsTags] = useState(info.collection.tags);
   const filteredTags = info.allTags.filter((elem) => !collectionsTags.find(({ id }) => elem.id === id));
   const [selectedTag, setSelectedTag] = useState();
    
   const [addedTags, setAddedTags] = useState([])
   const [addedNewTags, setAddedNewTags] = useState([]);
   const [deletedTags, setDeletedTags] = useState([]);

   const [allTags, setAllTags] = useState([...collectionsTags, ...addedTags, ...addedNewTags]);

   const [error, setError] = useState(false);
   const [pressEnterHint, setPressEnterHint] = useState(false);
   const [values, setValues] = React.useState([]);

   useEffect(() => {
      setAllTags([...collectionsTags, ...addedTags, ...addedNewTags])
   }, [addedTags, addedNewTags, deletedTags]);
   

   const onTagDelete = (tag) => {
      setCollectionsTags([...collectionsTags.filter(x => x !== tag)])

      setAddedTags([...addedTags.filter(x => x !== tag)])
      if (tag.hasOwnProperty('_id')) {
         setDeletedTags([...deletedTags, tag._id]);
      }
   }

   const handleKeyDown = (e) => {
      if (e.key === 'Enter' && e.target.value != "") {
         if (selectedTag && selectedTag.name == e.target.value) {
            setAddedTags([...addedTags, selectedTag])
            e.target.value = ''

         } else {
            setAddedNewTags([...addedNewTags, e.target.value])
            e.target.value = ''
            
         }
         setValues([]);
         setPressEnterHint(false)
      }
   }


   const onUpdateCollection = async () => {
      
      if(name === info.collection.name && !addedTags.length && !deletedTags.length && !addedNewTags) {
         setError(true);
         return;
      }

      if(name != info.collection.name) {
         await updateCollectionReq(info.collection._id, {name: name});
      }
      
      if(addedNewTags.length) {
         await addTagsToCollection(info.collection._id, {createTags: addedNewTags});

         const resTags = await getTags();
         setTags({tags: resTags.data.tags});
      }

      if(addedTags.length) {
         await addTagsToCollection(info.collection._id, {tags: addedTags.map(x => x._id)});
     
      }
      
      if(deletedTags.length) {
         await deleteTagsFromCollection(info.collection._id, {tags: deletedTags});
      }
      
      const resCollection = await getCollectionById(info.collection._id);
      updateCollection({ collection: resCollection.data.collection });

      closePopup();

   }


   const onChangeAutocomplete = (value) => {
      setSelectedTag(value);
      setPressEnterHint(true);
   }

   const onChangeTagsInput = (e) => {
      if (e.target.value != "") {
         setPressEnterHint(true)
      }
   }

   return (
      <section className="my-6 mx-20 relative editCollection">
         <div className="text-dark text-lg font-medium text-center">Edit collection</div>
         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-sm">Name</label>
            <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} className="editCollection__input"></input>
         </div>

         <div className="flex flex-col mt-3">
            <div className="flex justify-between">
               <label className="text-gray font-light text-sm">Tags</label>
               {pressEnterHint && <div className="text-textLightGray text-xs">Press Enter to confirm selected tag</div>}
            </div>

            <Autocomplete
               id="combo-box-demo"
               options={filteredTags}
               getOptionLabel={(option) => option.name}
               onChange={(event, value) => onChangeAutocomplete(value)}
               value={values}
               className="lala"
               renderInput={(params) =>  <TextField {...params} 
                  placeholder="Choose from list or add new tag(s)"
                  className="editCollection__input"
                  onChange={(e) => onChangeTagsInput(e)}
                  onKeyDown={(e) => handleKeyDown(e)} variant="outlined" 
                  />}
            />
         </div>


         <div className="flex mt-2 mb-4 flex-wrap">
            { allTags.length > 0 && 
               allTags.map(tag => {
                  return (
                     <div className="flex items-center rounded-md bg-brightLightPurple w-max px-2 py-0.5 my-1 mr-2 cursor-pointer transition border border-brightLightPurple hover:border-1 hover:border-purple">
                        <div className="text-purple text-xs">{tag.name ? tag.name : tag}</div>
                        <img src={deleteTag} className="ml-2" onClick={() => onTagDelete(tag)} />
                     </div>
                  )
               })
            }

         </div>
         { error && <div className="absolute bottom-3 right-0 text-center text-xs text-errorRed">no changes to update</div> }

         <div className="mx-auto w-min rounded-lg overflow-hidden" onClick={onUpdateCollection}>
            <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-7 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Save</div></ButtonBase>
         </div>

      </section>
   )
}

export default connect(
   null,
   mapDispatchToProps
 )(EditCollection);
