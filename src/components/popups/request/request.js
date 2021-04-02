import React, { useEffect } from 'react'

const Request = (props) => {

   const info = props.info;

   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Request</div>

         <div className="mt-7">
            <div className="flex justify-between items-center">
               <div className="text-base font-medium">{info.name}</div>
               <div className="text-sm text-gray">{info.date}</div>
            </div>
            <div className="mt-7">{info.shortDesc}</div>
            <div className="mt-3 font-light text-sm">{info.desc}</div>

            <div className="flex flex-wrap mt-5">
               <div className="rounded-lg w-20 h-20 overflow-hidden mr-3">
                  <img src="https://images.pexels.com/photos/175934/pexels-photo-175934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="object-cover h-20 w-full " />
               </div>
               <div className="rounded-lg w-20 h-20 overflow-hidden">
                  <img src="https://images.pexels.com/photos/2379980/pexels-photo-2379980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="object-cover h-20 w-full " />
               </div>
            </div>
         </div>

      </section>
   )
}

export default Request
