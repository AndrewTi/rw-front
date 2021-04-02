import React, { useEffect } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';

const AddTag = () => {


   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Add tag</div>

         <div className="flex flex-col mt-7">
            <label className="text-gray font-light text-sm">Name</label>
            <input className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple"></input>
         </div>

         <div className="mx-auto w-min mt-10">
            <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-8 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Create</div></ButtonBase>
         </div>

      </section>
   )
}

export default AddTag