import React,{useState,useEffect} from 'react'
import Image from './Image'

function ImageGrid() {
  const [imageData,setImageData] = useState([])

  const fetchImages = () => {
    fetch('https://www.madwell.com/interview/index.php?f=data')
      .then(data => data.json())
      .then(jsonArr => setImageData(jsonArr))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchImages();
    console.log(imageData);
  },[])

  return (
    <div className='imageGrid'>
      {imageData.map((el,idx) => <Image imageURL={el.path} caption={el.caption} key={idx} />)}
    </div>
  )
}

export default ImageGrid
