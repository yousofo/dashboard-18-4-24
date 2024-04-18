import React from 'react'

const ListItem = ({children}) => {
  return (
    <li className='p-2 rounded-md hover:bg-red-300 cursor-pointer text-sm'>
      {children}
    </li>
  )
}

export default ListItem