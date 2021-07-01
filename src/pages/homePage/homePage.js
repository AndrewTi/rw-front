import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Folder from '../../components/folder/folder';
import noCollectionsAnimation from '../../img/noRecentCollectionsAnimatedLoop.svg';

const mapStateToProps = state => ({
  ...state.collections
});

const HomePage = (props) => {

  const {
    collections
  } = props;

  return (
    <div>
      <div className="text-dark font-medium text-2xl mt-12 mx-20">Recently used</div>
      <div className="flex flex-wrap mx-14 mt-5">

        { false
        ? collections.map(collection => {
          return (
            <Folder collection={collection} type="recentlyCollection" />
            )
          })
        : <div className="homePage__noCollAnimationWrapper">
            <object type="image/svg+xml" className="homePage__noCollAnimation" data={noCollectionsAnimation}></object>
            <div className="mt-10 text-gray font-light text-center">No recently used collections yet.</div>
          </div>  
        }
        
      </div>
    </div>
    
  )
}

export default connect(
  mapStateToProps,
  null
)(HomePage);