import React from 'react'
import allData from '../data/allData.json'
import { Link } from 'react-router-dom'

import hd from './css/hd.module.scss'

export default function Hd() {  

   const allmenu = (event) =>{
    const allbtntarget = event.currentTarget.nextElementSibling;       
    allbtntarget.classList.toggle('d-none'); 
   } 

  return (
    <header className='fixed-top'>
      <div className="container ">
        <h1 className={`text-center  ${hd.h0}`}><a href="/" className='text-white'>로고</a></h1>
        <nav className="gnb ">
          <ul className='d-flex justify-content-between align-items-center'>
            {
              allData.navdata.map((v, i)=>{
                  return(
                    <li className={`position-relative ${ i===0 && 'me-auto' }`}>
                         <Link to={v.linkto} id="allbtn" onClick={allmenu} className='text-white'>{v.title}</Link>
                        {
                            i === 0 && <ul className='position-absolute d-none'>
                                      {
                                        v.submenu.map((vv, ii) => {
                                          return (
                                            <li key={ii}>
                                              <Link to={vv.linkto}>{vv.title}</Link>
                                            </li>
                                          );
                                        })
                                      }
                                    </ul>
                         }
                              
                    </li>
                  )
              })
            }
          </ul>
        </nav>  
      </div>
    </header>
  )
}
