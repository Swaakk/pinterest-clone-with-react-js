import React from 'react'
import icons from '../Images/icons.png'

function Pin({pinSize}) {
  return (
    <div className={`Pin ${pinSize}`}>
        <img className='mainPic' src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg" alt="" />
        <div className="content">
            <h1>sample name</h1>
            <div className='search'>
                <img src={icons} />
            </div>

        </div>
    </div>
  )
}

export default Pin;