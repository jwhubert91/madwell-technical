import React from 'react'

function Image({imageURL,alt,caption=""}) {
  const imageStyle = {
    backgroundImage: `url(${imageURL})`,
  }

  return (
    <div style={imageStyle} className='image' aria-label={alt}>
      <span>{caption}</span>
    </div>
  )
}

export default Image
