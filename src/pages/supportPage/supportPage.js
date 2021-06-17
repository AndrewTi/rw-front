import React from 'react'
import { connect } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import Folder from '../../components/folder/folder';
import { openPopup } from '../../actions/popup';

const mapDispatchToProps = dispatch => ({
   openPopup: (payload) => {
      return dispatch(openPopup(payload));
   }
})


const SupportPage = (props) => {
   const requests = [
      {name: "Jason Clark", date:"Apr 10, 2020", desc: "Lorem ipsum is placeholder text commonly used in the graphic.Lorem ipsum is placeholder text commonly used in the graphic.Lorem ipsum is placeholder text commonly used in the graphic.", shortDesc: "Lorem ipsum is placeholder text commonly used in the graphic."},
      {name: "Mike Clark", date:"Mar 20, 2020", desc: "Commonly used in the graphic. Lorem ipsum is placeholder text commonly used in the graphic.Lorem ipsum is placeholder text commonly used in the graphic.", shortDesc: "Commonly Lorem ipsum is placeholder text commonly used in the graphic."}
   ]
   return (
      <div>
         <div className="flex justify-between mx-10 lg:mx-20 mt-12">
            <div className="text-dark font-medium text-2xl">All Requests</div>
            <ButtonBase onClick={() => props.openPopup({ currentPopup: 'CreateRequest' })}><div className="px-5 py-1.5 bg-darkPurple text-white rounded-md cursor-pointer transition hover:bg-hoverPurple">Create a Request</div></ButtonBase>
         </div>

         <div className="mx-5 lg:mx-14 mt-5 flex flex-wrap">
            {requests.map(x => {
               return (
               <div onClick={() => props.openPopup({ currentPopup: 'Request', info: x })}>
                  <Folder type="support" name={x.name} date={x.date} desc={x.desc} shortDesc={x.shortDesc} />
               </div>
               )
            })}

         </div>

      </div>
   )
}

export default connect(
   null,
   mapDispatchToProps
)(SupportPage);