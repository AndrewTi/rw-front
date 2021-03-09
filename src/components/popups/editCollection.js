import React from 'react'

// icons 
import deleteTag from '../../img/ico/deleteTag.svg'

const EditCollection = (props) => {
   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Edit collection</div>
         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-base">Name</label>
            <input className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple"></input>
         </div>

         <div className="flex flex-col mt-3">
            <label className="text-gray font-light text-base">Tags</label>
            <input className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple"></input>
         </div>

         <div className="flex mt-2">
            <div className="flex items-center rounded-md bg-brightLightPurple w-max px-2 py-0.5 my-1 mr-1 cursor-pointer transition border border-brightLightPurple hover:border-1 hover:border-purple">
               <div className="text-purple text-sm">tag1</div>
               <img src={deleteTag} className="ml-2" />
            </div>

            <div className="flex items-center rounded-md bg-brightLightPurple w-max px-2 py-0.5 my-1 mr-1 cursor-pointer transition border border-brightLightPurple hover:border-1 hover:border-purple">
               <div className="text-purple text-sm">tag1</div>
               <img src={deleteTag} className="ml-2" />
            </div>
         </div>

         <div className="mx-auto bg-darkPurple text-sm text-white py-2 px-7 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Save</div>
      </section>
   )
}

export default EditCollection
