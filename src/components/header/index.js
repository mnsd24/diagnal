import React, { useState } from 'react'
import backButton from '../../assets/icons/Back.png'
import searchButton from '../../assets/icons/search.png'
import './index.css'

const Header = (props) => {

  var [showSearch, setShowSearch] = useState(false)

  function searchOnChange(e){
    props.onSearchValue(e.target.value.toLowerCase().trim())
  }

  return (
    <div className="mainDiv flex items-stretch  sticky top-0 h-16 my-2">
      {!showSearch ?
        <div className="flex w-full h-full justify-between items-start py-6">
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 mx-2 ">
              <img className="" src={backButton} alt="i" />
            </div>
            <div className="">
              <p className="text-white">Romantic Comedy</p>
            </div>
          </div>
          <div className="">
            <button onClick={() => { setShowSearch(!showSearch) }}>
              <img className="w-6 h-6 mx-2" src={searchButton} alt="i" />
            </button>
          </div>
        </div>
        :
        <div className="flex w-full h-full justify-between items-start py-2">
          <div className="flex-1 mx-2">
            <input type="search" className="rounded p-2 w-full mx-2" placeholder="Search by name..." 
            onChange ={searchOnChange}/>
          </div>
          <div className=" pt-2">
            <button onClick={() => { setShowSearch(!showSearch) }}>
              <img className="w-6 h-6 mx-2" src={searchButton} alt="i" />
            </button>
          </div>
        </div>
      }
    </div>
  )
}
export default Header;
