import React from 'react'

function Pin({pinSize}) {
  return (
    <div className={`Pin ${pinSize}`}>
        <img className='mainPic' src="https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366_1280.jpg" alt="" />
    </div>
  )
}

export default Pin