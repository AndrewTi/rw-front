import React, { useEffect } from 'react';
import CircularProgressbarComponent from '../../components/circularProgressbar/circularProgressbar'
import Folder from '../../components/folder/folder'

// images
import folder from '../../img/folder.svg'
import rightBottomArrow from '../../img/ico/right-bottom-arrow.svg'

const HomePage = () => {

  return (
    <div>
      <div className="text-dark font-medium text-2xl mt-10 mx-20">Recently used</div>
      <div className="flex flex-wrap mx-14 mt-4">

          <Folder name="Human body" type="recentlyCollection" tag="Health" percentage="32" />
          <Folder name="Human body" type="recentlyCollection" tag="Health" percentage="12" />
          <Folder name="Human body" type="recentlyCollection" tag="Health" percentage="65" />
          <Folder name="Human body" type="recentlyCollection" tag="Health" percentage="90" />
          <Folder name="Human body" type="recentlyCollection" tag="Health" percentage="100" />

      </div>
    </div>

  )
}

export default HomePage;