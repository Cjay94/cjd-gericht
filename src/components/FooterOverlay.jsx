import React from 'react'

const FooterOverlay = () => {
  return (
    <div className="w-full h-full -z-10 flex flex-col absolute">
      <div className="h-1/3 lg:h-1/4 bg-black" />
      <div className="app__bg h-2/3 lg:h-3/4" />
    </div>
  )
}

export default FooterOverlay