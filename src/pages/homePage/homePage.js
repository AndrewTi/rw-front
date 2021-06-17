import React, { useEffect } from 'react';
import Folder from '../../components/folder/folder'

const HomePage = () => {

  return (
    <div>
      <div className="text-dark font-medium text-2xl mt-12 mx-20">Recently used</div>
      <div className="flex flex-wrap mx-14 mt-5">

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