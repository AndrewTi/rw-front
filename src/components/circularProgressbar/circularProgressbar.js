import React from 'react'
import './circularProgressbar.scss';

// for progress bars
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressbarComponent = (props) => {
   return (
      <CircularProgressbar
              value={props.percentage}
              text={`${props.percentage}%`}
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
   )
}

export default CircularProgressbarComponent
