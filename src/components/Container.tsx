import React, { FC } from "react"
const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='p-4 md:px-12 mx-auto max-w-screen-2xl mt-28'>
      {children }
    </div>
  )
}

export default Container;