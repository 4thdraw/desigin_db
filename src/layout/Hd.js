import React from 'react'
import allData from '../data/allData.json'
import { Link } from 'react-router-dom'

export default function Hd() {
  const navinfo = () =>{
    console.log(allData.navdata)
  }

  React.useEffect(()=>{
    navinfo();
  }, [])
  // 화면이 열리자마자 실행해줘
 

  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center">
        <h1><a href="/">로고</a></h1>
        <nav className="gnb">
          <ul className='d-flex'>
            {
              allData.navdata.map((v, i)=>{
                  return(
                    <li>
                         <Link to={v.linkto}>{v.title}</Link>
                         <ul>
                          {
                            v.submenu.map((vv, ii)=>{
                              return(
                                   <li>
                                    <Link to={vv.linkto}>{vv.title}</Link>
                                   </li>
                              )
                            })
                          }
                          </ul>
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
