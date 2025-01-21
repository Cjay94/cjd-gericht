import { useRef, useState } from 'react'
import { meal } from '../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  // const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  return (
    <div className="h-screen relative">
      <video ref={videoRef} src={meal} type="video/mp4" autoPlay loop controls={false} muted className='w-full h-full object-cover' />
      <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center">
        {/* <div
          className="flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer border-2 border-cgolden"
          onClick={() => {
            setPlayVideo(!playVideo);
            playVideo ? videoRef.current.pause() : videoRef.current.play();
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (<BsFillPlayFill color="#fff" fontSize={30} />

          )}

        </div> */}
      </div>
    </div>
  )
}

export default Intro
