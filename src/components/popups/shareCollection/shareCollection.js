import React, { useEffect } from 'react'
import ChipInput from 'material-ui-chip-input'
import ButtonBase from '@material-ui/core/ButtonBase';

// styles 
import './shareCollection.scss';

// icon
import deleteTag from '../../../img/ico/deleteTag.svg';
import link from '../../../img/ico/linkIcon.svg';


const ShareCollection = (props) => {

   const [shareType, setShareType] = React.useState("all");
   const [errorMessage, setErrorMessage] = React.useState("");
   const [selectedEmails, setSelectedEmails] = React.useState([]);

   useEffect(() => {
      console.log("selectedEmails:", selectedEmails)
   }, [selectedEmails])


   const AccessToAll = () => {
      return (
         <div className="mx-auto w-min mt-10 rounded-lg overflow-hidden">
            <ButtonBase><div className="bg-darkPurple py-1.5 px-6 text-white text-base rounded-lg w-max hover:bg-hoverPurple transition cursor-pointer">Share</div></ButtonBase>
         </div>
      ) 
   }


   const SelectedUsers = () => {

      const validateEmail = (email) => {

         if (email !== "undefined" && email !== '') {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            let isExist = selectedEmails.includes(email);

            if (!pattern.test(email)) {
               setErrorMessage("Please enter valid email address.")
               return false
            }

            if (isExist) {
               setErrorMessage("This email already exist.")
               return false
            }

            return true
         }

      }

      const onAddEmail = (email) => {
         setSelectedEmails([...selectedEmails, email])
         setErrorMessage("")
      }


      const handleDeleteChip = (email) => {
         setSelectedEmails([...selectedEmails.filter(x => x !== email)])
      }


      return (
         <div className="px-7 mt-5">
            <div className="text-sm font-light text-gray">Invite guests</div>
            <div className="border border-lightGray rounded-lg mt-2 p-2">

               <ChipInput
                  value={selectedEmails}
                  onBeforeAdd={(email) => validateEmail(email)}
                  onAdd={(email) => onAddEmail(email)}
                  onDelete={(chip, index) => handleDeleteChip(chip, index)}
                  disableUnderline='true'
                  className="selectedEmailsWrapper"
               />

            </div>

            <div className="text-errorRed text-center mt-1 text-xs">{errorMessage}</div>

            <div className="flex justify-between items-center mt-6">
               <div className="text-sm font-light text-gray">Invite<span className="py-1 px-2 bg-orange mx-1 text-white font-normal rounded-md">{selectedEmails.length} guests</span> to this collection</div>
               <ButtonBase><div className="px-7 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Invite</div></ButtonBase>
            </div>
         </div >
      )
   }

   const AccessByLink = () => {
      return (
         <div className="flex justify-between items-center my-8">
            <div className="flex items-center"><img src={link}/><span className="text-sm w-48 ml-3 leading-4">Everyone who has a link can view</span></div>
            {/* <div className="border-b-2 border-purple text-purple cursor-pointer transition hover:text-hoverPurple">Copy Link</div> */}
            <ButtonBase className="copyLink">
               <div className="text-purple cursor-pointer transition hover:text-hoverPurple py-1 px-2">Copy Link</div>
            </ButtonBase>
         </div>
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
