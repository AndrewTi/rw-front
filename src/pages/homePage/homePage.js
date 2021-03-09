import React, { useEffect } from 'react';

//for progress bars
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// images
import folder from '../../img/folder.svg'
import rightBottomArrow from '../../img/ico/right-bottom-arrow.svg'

const HomePage = () => {
  const percentage = 50;


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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="folder-progressBar"
              strokeWidth="10"
              styles={{
                root: {},
                path: {
                  stroke: '#6A75CA',
                  strokeLinecap: 'rounded',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#bac0e6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#00071a',
                  fontSize: '24px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            />
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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="folder-progressBar"
              strokeWidth="10"
              styles={{
                root: {},
                path: {
                  stroke: '#6A75CA',
                  strokeLinecap: 'rounded',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#bac0e6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#00071a',
                  fontSize: '24px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            />
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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="folder-progressBar"
              strokeWidth="10"
              styles={{
                root: {},
                path: {
                  stroke: '#6A75CA',
                  strokeLinecap: 'rounded',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#bac0e6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#00071a',
                  fontSize: '24px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            />
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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="folder-progressBar"
              strokeWidth="10"
              styles={{
                root: {},
                path: {
                  stroke: '#6A75CA',
                  strokeLinecap: 'rounded',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#bac0e6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#00071a',
                  fontSize: '24px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            />
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
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="folder-progressBar"
              strokeWidth="10"
              styles={{
                root: {},
                path: {
                  stroke: '#6A75CA',
                  strokeLinecap: 'rounded',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                },
                trail: {
                  stroke: '#bac0e6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#00071a',
                  fontSize: '24px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
            />
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