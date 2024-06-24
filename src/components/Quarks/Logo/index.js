import * as React from 'react'
import logoSvg from './justy.svg'
import './style.scss'

const Logo = (props) => (
    <div className='logo'>
        <img src={logoSvg} className={props.size}/>
    </div>
  );
  
  export default Logo;
  