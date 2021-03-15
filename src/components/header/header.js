import React from 'react'
import { connect } from 'react-redux';


// images 
import userImg from '../../img/ico/user.svg'
import searchIcon from '../../img/ico/searchIcon.svg'

const mapStateToProps = state => ({
  ...state.currentUser
});

const Header = (props) => {
   return (
         <div className="flex justify-between items-center mt-11 mx-10 lg:mx-20">
          <div className="relative">
            <input type="text" placeholder="Search" className="h-9 w-96 rounded-full bg-white h-8 pl-4 pr-12 py-2 outline-none text-dark placeholder-grey::placeholder text-base shadow-md" />
            <img src={searchIcon} className="absolute cursor-pointer bg-darkPurple w-9 h-9 rounded-full object-center object-none transition duration-300 ease-in-out top-0 right-0 hover:bg-hoverPurple" />
          </div>
          <div className="flex items-center">
            <div className="text-base text-gray capitalize font-light mr-3">{props.user.name}</div>
            <div className="rounded-full w-12 h-12 border-2 border-lightGray">
              <img src={userImg} className="object-fill w-full h-full" />
            </div>
          </div>
        </div>
   )
}

export default connect(
  mapStateToProps,
  null
)(Header);

