import React, { useEffect } from 'react'
import ChipInput from 'material-ui-chip-input'

// styles 
import './shareCollection.scss';

// icon
import deleteTag from '../../../img/ico/deleteTag.svg';


const ShareCollection = (props) => {

   const [shareType, setShareType] = React.useState("all");
   const [emailError, setEmailError] = React.useState(false);
   const [selectedEmails, setSelectedEmails] = React.useState([]);

   useEffect(() => {
      console.log("selectedEmails:", selectedEmails)
   }, [selectedEmails])


   const AccessToAll = () => {
      return (
         <div className="bg-darkPurple py-1.5 px-6 text-white text-base rounded-lg w-max mx-auto mt-5 hover:bg-hoverPurple transition cursor-pointer">Share</div>
      )
   }

   
   
   const SelectedUsers = () => {
      
         const validateEmail = (email) => {
      
            if (email !== "undefined") {
      
                 
               let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
             
               if (!pattern.test(email)) {
             
                  setEmailError(true)
                  console.log("Please enter valid email address.")
                  return false
               }
      
               return true
            }
            
         }
         
         const onAddEmail = (email) => {
            setSelectedEmails([...selectedEmails, email])
         }
         
         
         const handleDeleteChip = (email) => {
            console.log(email)
         }


      return (
         <div className="px-7 mt-5">
            <div className="text-sm  font-light text-gray">Invite guests</div>
            <div className="border border-lightGray rounded-lg mt-2 p-2">

               <ChipInput
                  onBeforeAdd={(email) => validateEmail(email)}
                  onAdd = {(email) => onAddEmail(email)}
                  onDelete={(chip, index) => handleDeleteChip(chip, index)}
                  disableUnderline='true'
                  className="selectedEmailsWrapper"
               />

            </div>
         </div >
      )
   }

   const AccessByLink = () => {
      return (
         <div className="">access by link</div>
      )
   }

   const loadComponent = () => {
      switch (shareType) {
         case 'all':
            return <AccessToAll />
         case 'selectedUsers':
            return <SelectedUsers />
         case 'link':
            return <AccessByLink />
         default:
            return <AccessToAll />
      }
   }



   return (
      <section className="my-6 mx-20">
         <div className="text-dark text-lg font-medium text-center">Share collection</div>

         <div className="flex justify-between mt-5">
            <div className={shareType === "all" ? "shareType--active" : "shareType"} onClick={() => setShareType("all")}>Access to all</div>
            <div className={shareType === "selectedUsers" ? "shareType--active" : "shareType"} onClick={() => setShareType("selectedUsers")}>To selected users</div>
            <div className={shareType === "link" ? "shareType--active" : "shareType"} onClick={() => setShareType("link")}>Access by link</div>
         </div>
         {loadComponent()}

      </section>
   )
}

export default ShareCollection
