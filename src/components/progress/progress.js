import React from 'react'

// images 
import arrows from '../../img/ico/arrows.svg'
import arrowsReverse from '../../img/ico/arrowsReverse.svg'
import illustration from '../../img/homePageIllustration.svg'

const Progress = () => {
  const [expandProgress, setExpandProgress] = React.useState(true);


   return (
      <div className={expandProgress ? "progress-bar" : "progress-bar collapse-progress"}>

         <img
            src={expandProgress ? arrows : arrowsReverse}
            className="cursor-pointer bg-orange w-7 h-7 rounded-md overflow-hidden object-center object-none mx-6 my-5 hover:bg-darkOrange transition duration-300 ease-in-out "
            onClick={() => setExpandProgress(!expandProgress)}
         />

         <div className="text-lg font-medium text-dark px-6">Progress</div>

         <div className="progressBar">
            <div className="text-dark">Mn</div>
            {expandProgress ?
               <div className="h-2 w-60 relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>


         <div className="progressBar">
            <div className="text-dark ">We</div>
            {expandProgress ?
               <div className="h-2 w-full relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>

         <div className="progressBar">
            <div className="text-dark ">Th</div>
            {expandProgress ?
               <div className="h-2 w-full relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>

         <div className="progressBar">
            <div className="text-dark ">Fr</div>
            {expandProgress ?
               <div className="h-2 w-full relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>

         <div className="progressBar">
            <div className="text-dark">St</div>
            {expandProgress ?
               <div className="h-2 w-full relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>
         <div className="progressBar">
            <div className="text-dark ">Sn</div>
            {expandProgress ?
               <div className="h-2 w-full relative bg-purple mx-5 rounded-full overflow-hidden">
                  <div class="h-full bg-darkPurple rounded-full absolute" style={{ width: "20%" }}></div>
               </div> : null
            }
            <div className="text-textGray">20%</div>
         </div>

         {expandProgress ? <img className="mx-auto mt-16 p-2" src={illustration} alt="illustration" /> : null}

      </div>
   )
}

export default Progress
