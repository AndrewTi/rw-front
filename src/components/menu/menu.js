import React from 'react'
import { NavLink } from "react-router-dom";

// styles
import './menu.scss';


// images
import logo from '../../img/logo.svg'
import homeIco from '../../img/ico/home.svg'
import collectionsIcon from '../../img/ico/collections.svg'
import practiceIcon from '../../img/ico/practice.svg'
import supportIcon from '../../img/ico/support.svg'
import folderIcon from '../../img/ico/folderIcon.svg';

import instagramIcon from '../../img/ico/instagram.svg'
import facebookIcon from '../../img/ico/facebook.svg'
import twitterIcon from '../../img/ico/twitter.svg'


const Menu = () => {


   return (
      <div className="bg-white menu__wrapper">
         <div className="h-full pt-12 pb-20 fixed w-52 flex flex-col">
         <div>
            <NavLink to="/">
               <img className="px-10" src={logo} />
            </NavLink>

            <div className="flex-column text-dark text-sm capitalize ml-10 mt-16">
               <div className="text-base uppercase text-gray font-light">profile</div>


               <NavLink to="/" exact activeClassName="menuItem--active" >
                  <div className="flex my-5 cursor-pointer">
                     <img src={homeIco} />
                     <div className="ml-4">home</div>
                  </div>
               </NavLink>

               <NavLink to="/collections" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={collectionsIcon} />
                     <div className="ml-4 ">collections</div>
                  </div>
               </NavLink>

               <NavLink to="/practice" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={practiceIcon} />
                     <div className="ml-4">practice</div>
                  </div>
               </NavLink>

               <NavLink to="/classes" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={practiceIcon} />
                     <div className="ml-4">Classes</div>
                  </div>
               </NavLink>

               <NavLink to="/support" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={supportIcon} />
                     <div className="ml-4">support</div>
                  </div>
               </NavLink>

            </div>

            <div className="flex-column text-dark text-sm capitalize ml-10 mt-32">
               <div className="text-base uppercase text-gray font-light">collections</div>
               <NavLink to="/collection1" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={folderIcon} />
                     <div className="ml-4 menuItem">health</div>
                  </div>
               </NavLink>
               <NavLink to="/collection2" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={folderIcon} />
                     <div className="ml-4 menuItem">cinema</div>
                  </div>
               </NavLink>
               <NavLink to="/collection3" activeClassName="menuItem--active" >
                  <div className="flex my-5">
                     <img src={folderIcon} />
                     <div className="ml-4 menuItem">travel</div>
                  </div>
               </NavLink>
            </div>
         </div>

         <div className="flex mx-10 justify-between mt-auto">
            <img src={instagramIcon} />
            <img src={facebookIcon} />
            <img src={twitterIcon} />
         </div>

</div>
      </div>
   )
}

export default Menu
