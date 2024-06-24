import * as React from 'react'
import './style.scss'
import sphere from './blueSphere.svg'

const Tag = (props) => (
    <div className='tag'>
        <img src={sphere} />
        <p>{props.content}</p>
    </div>
);
  
  export default Tag;
  