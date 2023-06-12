import React from 'react'

function Layout(props) {
  return (
    <div className='w-[90%] mt-[50px] mx-auto'>
      {props.children}
    </div>
  )
}

export default Layout