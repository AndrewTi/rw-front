import React, { useEffect } from 'react'
import './loadCollection.scss'
import ButtonBase from '@material-ui/core/ButtonBase';

// icons
import prevStep from '../../../img/ico/prevStepIcon.svg';

const LoadCollection = () => {

   const [currentStep, setCurrentStep] = React.useState(1);
   const [collections, setCollections] = React.useState([
      { name: "collections 1", words: ["hello", "hello", "world2", "world"] },
      { name: "collections 2", words: ["hello", "hello", "world2", "world"] },
      { name: "collections 3", words: ["hello", "hello", "world2", "world"] }
   ])
   const [format, setFormat] = React.useState("jpeg");

   const [details, setDetails] = React.useState([
      { name: "Hide original", checked: false },
      { name: "Hide transcription", checked: false },
      { name: "Hide translated", checked: false },
   ])


   useEffect(() => {
      console.log(currentStep)
   }, [currentStep])

   useEffect(() => {
      const updatedCollections = collections.map(x => {
         x.checked = false;
         return x;
      })
      updatedCollections[0].checked = true;
      setCollections(updatedCollections);
   }, []);

   const onCollectionSelect = (collection) => {
      const updatedCollections = collections.map(x => {
         if (x.name === collection.name) {
            x.checked = !x.checked
         }
         return x;
      });
      setCollections(updatedCollections);
   }

   const onDetailSelect = (detail) => {
      const updatedDetails = details.map(x => {
         if (x.name === detail.name) {
            x.checked = !x.checked
         }
         return x;
      });
      setDetails(updatedDetails);
   }

   const showStepContent = () => {
      if (currentStep === 1) {
         return (
            <div>
               <div className="text-dark text-lg font-medium text-center">Collection selection</div>

               <div className="flex flex-wrap my-4">

                  {collections.map(collection => {
                     return (
                        <div className={collection.checked ? "load__selectCollection--active" : "load__selectCollection"} onClick={() => onCollectionSelect(collection)}>{collection.name}</div>
                     )
                  })}

               </div>

               <div className="mx-auto w-min rounded-lg overflow-hidden">
                  <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-10 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition" onClick={() => setCurrentStep(currentStep + 1)} >Next</div></ButtonBase>
               </div>
            </div>
         )
      }
      else if (currentStep === 2) {
         return (
            <div>
               <img src={prevStep} className="absolute top-6 left-6 cursor-pointer" onClick={() => setCurrentStep(currentStep - 1)}/>
               <div className="text-dark text-lg font-medium text-center">Format selection</div>

               <div className="flex flex-wrap justify-center my-5">
                  <div className={format === "pdf" ? "load__formatCollection--active" : "load__formatCollection"} onClick={() => setFormat("pdf")} >PDF</div>
                  <div className={format === "jpeg" ? "load__formatCollection--active" : "load__formatCollection"} onClick={() => setFormat("jpeg")} >JPEG</div>
                  <div className={format === "excel" ? "load__formatCollection--active" : "load__formatCollection"} onClick={() => setFormat("excel")} >EXCEL</div>
               </div>

               <div className="mx-auto w-min rounded-lg overflow-hidden">
                  <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-2 px-10 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition" onClick={() => setCurrentStep(currentStep + 1)} >Next</div></ButtonBase>
               </div>
            </div>
         )
      }

      else if (currentStep === 3) {
         return (
            <div>
               <img src={prevStep} className="absolute top-6 left-6 cursor-pointer" onClick={() => setCurrentStep(currentStep - 1)}/>
               <div className="text-dark text-lg font-medium text-center">Details</div>

               <div className="flex flex-wrap justify-between my-5">
                  {details.map(detail => {
                     return (
                        <div className={detail.checked ? "load__selectCollection--active" : "load__selectCollection"} onClick={() => onDetailSelect(detail)}>{detail.name}</div>
                     )
                  })}
               </div>

               <div className="mx-auto w-min rounded-lg overflow-hidden">
                  <ButtonBase><div className="mx-auto bg-darkPurple text-sm text-white py-3 px-10 w-max rounded-md cursor-pointer hover:bg-hoverPurple transition">Download</div></ButtonBase>
               </div>
            </div>
         )
      }
   }


   return (
      <section className="my-6 mx-20">

         {showStepContent()}


         <div className="text-gray absolute bottom-5 right-6 text-sm">step {currentStep} of 3</div>
      </section>
   )
}

export default LoadCollection