import React, { useEffect } from 'react';
import CircularProgressbarComponent from '../../components/circularProgressbar/circularProgressbar'

// images
import folder from '../../img/folder.svg'
import rightBottomArrow from '../../img/ico/right-bottom-arrow.svg'

const HomePage = () => {

  return (
    <div>
      <div className="text-dark font-medium text-2xl mt-10 mx-20">Recently used</div>
      <div className="flex flex-wrap mx-14 mt-4">

        <div className="relative cursor-pointer">
          <img src={folder} className="" />
          <div className="absolute top-12 left-10">
            <div className="text-gray capitalize text-sm font-light">health</div>
            <div className="text-dark text-lg">Human body</div>
          </div>
          <div className="absolute bottom-12 left-10">
            <CircularProgressbarComponent percentage="32"/>
          </div>

          <div className="absolute bottom-12 right-12">
            <img src={rightBottomArrow} />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <img src={folder} className="" />
          <div className="absolute top-12 left-10">
            <div className="text-gray capitalize text-sm font-light">health</div>
            <div className="text-dark text-lg">Human body</div>
          </div>
          <div className="absolute bottom-12 left-10">
            <CircularProgressbarComponent percentage="50"/>
          </div>

          <div className="absolute bottom-12 right-12">
            <img src={rightBottomArrow} />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <img src={folder} className="" />
          <div className="absolute top-12 left-10">
            <div className="text-gray capitalize text-sm font-light">health</div>
            <div className="text-dark text-lg">Human body</div>
          </div>
          <div className="absolute bottom-12 left-10">
            <CircularProgressbarComponent percentage="50"/>
          </div>

          <div className="absolute bottom-12 right-12">
            <img src={rightBottomArrow} />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <img src={folder} className="" />
          <div className="absolute top-12 left-10">
            <div className="text-gray capitalize text-sm font-light">health</div>
            <div className="text-dark text-lg">Human body</div>
          </div>
          <div className="absolute bottom-12 left-10">
            <CircularProgressbarComponent percentage="50"/>
          </div>

          <div className="absolute bottom-12 right-12">
            <img src={rightBottomArrow} />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <img src={folder} className="" />
          <div className="absolute top-12 left-10">
            <div className="text-gray capitalize text-sm font-light">health</div>
            <div className="text-dark text-lg">Human body</div>
          </div>
          <div className="absolute bottom-12 left-10">
            <CircularProgressbarComponent percentage="50"/>
          </div>

          <div className="absolute bottom-12 right-12">
            <img src={rightBottomArrow} />
          </div>
        </div>


      </div>
    </div>

  )
}

export default HomePage;