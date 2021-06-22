import React, { useState } from 'react'
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';

import { addTagReq } from '../../service/requests';
import { closePopup } from '../../actions/popup';
import { addTag } from '../../actions/tags';

const mapDispatchToProps = dispatch => ({
   closePopup: () => {
      return dispatch(closePopup());
   },
   addTag: (payload) => {
     return dispatch(addTag(payload));
   },
 })


const AddTag = (props) => {

   const {
      closePopup,
      addTag
   } = props;

   const [tag, setTag] = useState({ name: "" });
   const [error, setError] = useState(false);

   const onAddTag = async () => {
      if(!tag.name) {
         setError(true)
         return;
      }

      const resp = await addTagReq(tag).catch(console.log);
      addTag({tag: resp.data.tag});
      closePopup();
   }


   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Add tag</div>

         <div className="flex flex-col mt-7">
            <label className="text-gray font-light text-sm">Name</label>
            <input className={error ? "popupInput--error" : "popupInput"} onChange={e => setTag({...tag, name: e.target.value})}></input>
         </div>

         <div className="mx-auto w-min mt-10">
            <ButtonBase><div onClick={onAddTag} className="mx-auto bg-darkPurple text-sm text-white py-2 px-8 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Create</div></ButtonBase>
         </div>

      </section>
   )
}

export default connect(
   null,
   mapDispatchToProps
 )(AddTag);
