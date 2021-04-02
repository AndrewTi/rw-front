import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';

// icons 
import deleteTag from '../../../img/ico/deleteTag.svg'

const CreateCollection = (props) => {

   const [collection, setCollection] = React.useState({
      name: "",
      tags: []
   })
   
   const handleKeyDown = (e) => {
      if (e.key === 'Enter' && e.target.value != "") {
         let updatedTags = [...collection.tags, e.target.value];
         setCollection({ ...collection, tags: updatedTags })
         e.target.value = ''
      }
   }
   
   const onTagDelete = (tag) => {
      let updatedTags = collection.tags.filter(x => x != tag);
      setCollection({ ...collection, tags: updatedTags })
   }


   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Create collection</div>
         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-sm">Name</label>
            <input className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple"></input>
         </div>

         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-sm">Tags</label>
            <input className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple" onKeyDown={(e) => handleKeyDown(e)}></input>
         </div>


         <div className="flex mt-2 mb-4 flex-wrap">

         {collection.tags.map(tag => {
            return (
               <div className="flex items-center rounded-md bg-brightLightPurple w-max px-2 py-0.5 my-1 mr-2 cursor-pointer transition border border-brightLightPurple hover:border-1 hover:border-purple">
                  <div className="text-purple text-xs">{tag}</div>
                  <img src={deleteTag} className="ml-2"  onClick={() => onTagDelete(tag)}/>
               </div>
            )
         })}
           
         </div>

         <div className="mx-auto w-min rounded-lg overflow-hidden">
            <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-7 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Create</div></ButtonBase>
         </div>
      </section>
   )
}

export default CreateCollection
