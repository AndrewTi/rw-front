import React from 'react'
import whiteFolder from '../../../img/whiteFolder.svg'
import CircularProgressbarComponent from '../../../components/circularProgressbar/circularProgressbar'


const Student = () => {
   return (
      <section className="my-6 mx-20 text-sm">
         <div className="text-dark text-lg font-medium text-center">John Clark</div>
         <div className="flex justify-between mt-5">
            <div className="flex">
               <div className="text-numberGray">Email</div>
               <div className="ml-4">johnclark@gmail.com</div>
            </div>
            <div className="flex">
               <div className="text-numberGray">Number</div>
               <div className="ml-4">+3805678555</div>
            </div>
         </div>

         <div className="mt-5">
            <div className="py-2 px-5 border border-lightGray rounded-lg flex items-center my-3">
               <img src={whiteFolder} />
               <div className="flex-col ml-2">
                  <div className="font-medium">Collection 1</div>
                  <div className="text-gray font-light text-xs">26 words</div>
               </div>
               <div className="ml-auto"><CircularProgressbarComponent percentage="15"/></div>
            </div>
            <div className="py-2 px-5 border border-lightGray rounded-lg flex items-center my-3">
               <img src={whiteFolder} />
               <div className="flex-col ml-2">
                  <div className="font-medium">Collection 1</div>
                  <div className="text-gray font-light text-xs">26 words</div>
               </div>
               <div className="ml-auto"><CircularProgressbarComponent percentage="20"/></div>
            </div>
            <div className="py-2 px-5 border border-lightGray rounded-lg flex items-center my-3">
               <img src={whiteFolder} />
               <div className="flex-col ml-2">
                  <div className="font-medium">Collection 1</div>
                  <div className="text-gray font-light text-xs">26 words</div>
               </div>
               <div className="ml-auto"><CircularProgressbarComponent percentage="70"/></div>
            </div>
         </div>


      </section>
   )
}

export default Student