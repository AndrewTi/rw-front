import React, { useEffect, useRef } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';

// icons
import attachImage from '../../../img/ico/attachImage.svg'
import attachFile from '../../../img/ico/attachFile--small.svg'



const CreateRequest = () => {

   const [files, setFiles] = React.useState([])
   const [filesError, setFilesError] = React.useState(false)

   useEffect(() => {
      console.log("files:", files)
   }, [files])


   // Create a reference to the hidden file input element
   const hiddenFileInput = React.useRef(null);




   // Programatically click the hidden file input element
   // when the Button component is clicked
   const handleClick = event => {
      hiddenFileInput.current.click();
   };


   // Call a function (passed as a prop from the parent component)
   // to handle the user-selected file 
   const handleChange = event => {
      const fileUploaded = Array.from(event.target.files);
      if (fileUploaded.length > 10) {
         setFilesError(true)
      } else {
         setFiles(fileUploaded)
         setFilesError(false)
         console.log(fileUploaded)
      }
   };


   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Create a Request</div>
         <div className="flex flex-col mt-3 text-sm">
            <label for="header" className="text-gray font-light">Header</label>
            <input type="text" className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple placeholder-gray" placeholder="To describe a problem in short sentence" id="header"></input>
         </div>

         <div className="flex flex-col mt-3 text-sm">
            <label for="message" className="text-gray font-light">Message</label>
            <textarea type="text" className="border-lightGray border rounded-lg py-1.5 px-2 text-dark font-light mt-1 outline-none focus:border-lightPurple resize-none placeholder-gray" placeholder="To describe a problem in all details" rows="6" cols="50" id="message"></textarea>
         </div>
         
         <div className="mt-3">
            {files.length ? files.map(x => <div className="mt-1 flex items-center"><img src={attachFile} /><div className="ml-2 text-xs text-gray">{x.name}</div></div>) : null}
         </div>
         {filesError ? <div className="text-xs text-red mt-3">You can upload only 10 images</div> : null}

         <div className="mt-5 relative">
            <ButtonBase className="copyLink z-20" onClick={handleClick}>
               <div className="py-1 px-2 flex items-center">
                  <img src={attachImage} /><div className="text-purple cursor-pointer transition hover:text-hoverPurple ml-2 text-sm">Attach image</div>
               </div>
            </ButtonBase>

            <input
               type="file"
               multiple
               accept="image/*"
               className="border absolute top-0 left-0 text-xs w-32 z-0 hidden"
               ref={hiddenFileInput}
               onChange={handleChange}
            />

         </div>

         <div className="mx-auto w-min mt-5">
            <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-7 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Create</div></ButtonBase>
         </div>



      </section>
   )
}

export default CreateRequest