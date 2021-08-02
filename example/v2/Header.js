import React from 'react'

const Header = ({ title }) => {
  return (
    <div className="sticky top-0 left-0 flex flex-row items-center justify-start w-full h-20 px-6 bg-white shadow-sm z-1">
      <h2 className="text-3xl font-bold text-gray-900 truncate">
        {title}
      </h2>
    </div>
  )
}

export default Header
