import React from 'react'

const Header = ({ title }) => {
  return (
    <div className="sticky top-0 left-0 flex flex-row items-center justify-start w-full h-20 px-6 bg-white shadow-sm z-1">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        {title}
      </h2>
    </div>
  )
}

export default Header
