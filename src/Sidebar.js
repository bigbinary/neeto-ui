import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
      <div className="flex items-center flex-shrink-0 px-4 space-y-5">
        <svg width="112" height="36" viewBox="0 0 70 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.9853 8.64989C16.9853 9.41188 16.9853 10.1705 16.9853 10.9358C16.9853 11.7012 16.9853 12.4598 17.0049 13.2218C17.0403 13.8563 16.9215 14.4898 16.6591 15.0659C16.3874 15.6204 15.9216 16.0502 15.3541 16.2697C14.7196 16.5315 14.1438 16.6332 13.5713 16.5115C12.9987 16.3898 12.4295 16.0463 11.8015 15.4194C10.6901 14.3022 9.58202 13.179 8.47718 12.0496C7.37235 10.9203 6.26914 9.7937 5.16757 8.6699C4.99484 8.46883 4.80061 8.28819 4.58851 8.13134C4.4734 8.05612 4.34208 8.01073 4.20593 7.9991C4.06978 7.98748 3.93291 8.00998 3.80719 8.06465C3.66577 8.10966 3.53721 8.1892 3.43262 8.2964C3.32804 8.4036 3.25057 8.53523 3.20692 8.67991C3.13586 8.96571 3.10673 9.26072 3.12047 9.55527C3.12047 10.8002 3.12428 12.0469 3.13189 13.2952C3.13189 14.5423 3.13189 15.7962 3.11068 17.0367C3.09781 17.3491 3.15066 17.6607 3.26564 17.9504C3.37607 18.2193 3.57599 18.4396 3.83002 18.5724C3.95903 18.6424 4.10216 18.681 4.24818 18.685C4.39421 18.6891 4.53917 18.6585 4.6717 18.5957C4.9455 18.467 5.19377 18.2878 5.40409 18.0672C5.90974 17.5647 6.41268 17.059 6.9129 16.5499C7.41313 16.0408 7.90519 15.5261 8.3891 15.0059C8.4829 14.8936 8.59747 14.8013 8.72622 14.7344C8.85498 14.6674 8.9954 14.6271 9.13943 14.6157C9.41121 14.617 9.67581 14.705 9.89629 14.8675C10.1051 15.0075 10.2013 15.3093 10.1948 15.6278C10.1962 15.9464 10.083 16.2543 9.87671 16.4932C9.27645 17.1134 8.68108 17.742 8.08244 18.3623C7.48381 18.9825 6.8705 19.5961 6.24087 20.1847C5.77849 20.6334 5.18482 20.9146 4.55099 20.985C3.91365 21.0354 3.27437 20.9171 2.69474 20.6416C2.16426 20.4281 1.71289 20.0496 1.4045 19.5594C1.11563 19.0495 0.975277 18.4658 0.99997 17.8771C1.01465 16.3398 1.01302 14.8025 1.01139 13.2635C1.00976 11.7245 1.01139 10.1889 1.01139 8.64989C0.998543 8.03844 1.12298 7.43211 1.37514 6.87749C1.64151 6.33103 2.10269 5.90974 2.66375 5.70033C3.24547 5.45569 3.88461 5.39076 4.50206 5.51359C5.13837 5.6662 5.71516 6.01066 6.15768 6.50233C7.27665 7.66948 8.40541 8.82886 9.54396 9.98045C10.6825 11.132 11.8178 12.2859 12.9498 13.4419C13.1041 13.6143 13.2815 13.7637 13.4767 13.8854C13.5747 13.9432 13.684 13.9782 13.7967 13.988C13.9095 13.9978 14.023 13.9821 14.1291 13.9421C14.3338 13.8795 14.5196 13.7648 14.669 13.6086C14.8209 13.4224 14.8968 13.1836 14.8811 12.9417C14.8648 11.5361 14.8648 10.1372 14.8648 8.73826C14.8648 7.33935 14.8648 5.93876 14.8648 4.53985C14.8751 4.32851 14.8423 4.11729 14.7685 3.91959C14.722 3.81929 14.6565 3.72937 14.5759 3.65498C14.4953 3.58059 14.4011 3.52319 14.2988 3.48607C14.0999 3.38988 13.8827 3.33978 13.6626 3.33935C13.4361 3.35547 13.2204 3.44415 13.046 3.59279C12.4298 4.08747 11.8498 4.62746 11.3105 5.20846C10.7641 5.7787 10.2307 6.36394 9.65977 6.91084C9.44738 7.14504 9.16526 7.30096 8.85724 7.35435C8.72176 7.36207 8.58634 7.33799 8.46137 7.28394C8.3364 7.2299 8.22519 7.14733 8.13627 7.04256C8.03111 6.93805 7.94883 6.81194 7.89485 6.67255C7.84086 6.53316 7.8164 6.38365 7.82309 6.23389C7.84451 5.91108 7.98363 5.60823 8.21293 5.3852C8.79036 4.79607 9.3667 4.20693 9.94196 3.6178C10.5172 3.02866 11.0963 2.44397 11.6791 1.86373C12.0443 1.51657 12.4842 1.26205 12.9634 1.12071C13.4425 0.979363 13.9474 0.955163 14.4374 1.05006C14.9292 1.12089 15.3979 1.30863 15.8058 1.59821C16.2138 1.88778 16.5496 2.27112 16.7863 2.71742C16.8589 2.86109 16.9137 3.01343 16.9494 3.17094C16.9842 3.33017 17.0006 3.49301 16.9983 3.65615C16.9918 4.48649 16.9918 5.32017 16.9983 6.15719C17.0049 6.9942 17.0005 7.82511 16.9853 8.64989Z" fill="#1F2937"/>
          <path d="M21.17 13V4.07201H23.204L23.384 5.58401C23.66 5.05601 24.056 4.63601 24.572 4.32401C25.1 4.01201 25.718 3.85601 26.426 3.85601C27.53 3.85601 28.388 4.20401 29 4.90001C29.612 5.59601 29.918 6.61601 29.918 7.96001V13H27.614V8.17601C27.614 7.40801 27.458 6.82001 27.146 6.41201C26.834 6.00401 26.348 5.80001 25.688 5.80001C25.04 5.80001 24.506 6.02801 24.086 6.48401C23.678 6.94001 23.474 7.57601 23.474 8.39201V13H21.17Z" fill="#1F2937"/>
          <path d="M36.4591 13.216C35.5591 13.216 34.7611 13.024 34.0651 12.64C33.3691 12.256 32.8231 11.716 32.4271 11.02C32.0311 10.324 31.8331 9.52001 31.8331 8.60801C31.8331 7.68401 32.0251 6.86201 32.4091 6.14201C32.8051 5.42201 33.3451 4.86401 34.0291 4.46801C34.7251 4.06001 35.5411 3.85601 36.4771 3.85601C37.3531 3.85601 38.1271 4.04801 38.7991 4.43201C39.4711 4.81601 39.9931 5.34401 40.3651 6.01601C40.7491 6.67601 40.9411 7.41401 40.9411 8.23001C40.9411 8.36201 40.9351 8.50001 40.9231 8.64401C40.9231 8.78801 40.9171 8.93801 40.9051 9.09401H34.1191C34.1671 9.79001 34.4071 10.336 34.8391 10.732C35.2831 11.128 35.8171 11.326 36.4411 11.326C36.9091 11.326 37.2991 11.224 37.6111 11.02C37.9351 10.804 38.1751 10.528 38.3311 10.192H40.6711C40.5031 10.756 40.2211 11.272 39.8251 11.74C39.4411 12.196 38.9611 12.556 38.3851 12.82C37.8211 13.084 37.1791 13.216 36.4591 13.216ZM36.4771 5.72801C35.9131 5.72801 35.4151 5.89001 34.9831 6.21401C34.5511 6.52601 34.2751 7.00601 34.1551 7.65401H38.6011C38.5651 7.06601 38.3491 6.59801 37.9531 6.25001C37.5571 5.90201 37.0651 5.72801 36.4771 5.72801Z" fill="#1F2937"/>
          <path d="M47.217 13.216C46.317 13.216 45.519 13.024 44.823 12.64C44.127 12.256 43.581 11.716 43.185 11.02C42.789 10.324 42.591 9.52001 42.591 8.60801C42.591 7.68401 42.783 6.86201 43.167 6.14201C43.563 5.42201 44.103 4.86401 44.787 4.46801C45.483 4.06001 46.299 3.85601 47.235 3.85601C48.111 3.85601 48.885 4.04801 49.557 4.43201C50.229 4.81601 50.751 5.34401 51.123 6.01601C51.507 6.67601 51.699 7.41401 51.699 8.23001C51.699 8.36201 51.693 8.50001 51.681 8.64401C51.681 8.78801 51.675 8.93801 51.663 9.09401H44.877C44.925 9.79001 45.165 10.336 45.597 10.732C46.041 11.128 46.575 11.326 47.199 11.326C47.667 11.326 48.057 11.224 48.369 11.02C48.693 10.804 48.933 10.528 49.089 10.192H51.429C51.261 10.756 50.979 11.272 50.583 11.74C50.199 12.196 49.719 12.556 49.143 12.82C48.579 13.084 47.937 13.216 47.217 13.216ZM47.235 5.72801C46.671 5.72801 46.173 5.89001 45.741 6.21401C45.309 6.52601 45.033 7.00601 44.913 7.65401H49.359C49.323 7.06601 49.107 6.59801 48.711 6.25001C48.315 5.90201 47.823 5.72801 47.235 5.72801Z" fill="#1F2937"/>
          <path d="M57.4566 13C56.5206 13 55.7706 12.772 55.2066 12.316C54.6426 11.86 54.3606 11.05 54.3606 9.88601V5.99801H52.8306V4.07201H54.3606L54.6306 1.67801H56.6646V4.07201H59.0766V5.99801H56.6646V9.90401C56.6646 10.336 56.7546 10.636 56.9346 10.804C57.1266 10.96 57.4506 11.038 57.9066 11.038H59.0226V13H57.4566Z" fill="#1F2937"/>
          <path d="M65.1102 13.216C64.2462 13.216 63.4662 13.018 62.7702 12.622C62.0862 12.226 61.5402 11.68 61.1322 10.984C60.7362 10.276 60.5382 9.46001 60.5382 8.53601C60.5382 7.61201 60.7422 6.80201 61.1502 6.10601C61.5582 5.39801 62.1042 4.84601 62.7882 4.45001C63.4842 4.05401 64.2642 3.85601 65.1282 3.85601C65.9802 3.85601 66.7482 4.05401 67.4322 4.45001C68.1282 4.84601 68.6742 5.39801 69.0702 6.10601C69.4782 6.80201 69.6822 7.61201 69.6822 8.53601C69.6822 9.46001 69.4782 10.276 69.0702 10.984C68.6742 11.68 68.1282 12.226 67.4322 12.622C66.7362 13.018 65.9622 13.216 65.1102 13.216ZM65.1102 11.218C65.7102 11.218 66.2322 10.996 66.6762 10.552C67.1202 10.096 67.3422 9.42401 67.3422 8.53601C67.3422 7.64801 67.1202 6.98201 66.6762 6.53801C66.2322 6.08201 65.7162 5.85401 65.1282 5.85401C64.5162 5.85401 63.9882 6.08201 63.5442 6.53801C63.1122 6.98201 62.8962 7.64801 62.8962 8.53601C62.8962 9.42401 63.1122 10.096 63.5442 10.552C63.9882 10.996 64.5102 11.218 65.1102 11.218Z" fill="#1F2937"/>
        </svg>
      </div>
      <div className="flex flex-col flex-grow mt-6">
        <nav className="flex-1 space-y-1 bg-white" aria-label="Sidebar">
          <NavLink to="/buttons" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline" activeClassName="text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50">
            Buttons
          </NavLink>

          <NavLink to="/form-elements" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline" activeClassName="text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50">
            Form Elements
          </NavLink>

          <NavLink to="/formik" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline" activeClassName="text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50">
            Formik
          </NavLink>

          <NavLink to="/overlays" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline" activeClassName="text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50">
            Overlays
          </NavLink>

          <NavLink to="/components" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 border-l-4 border-transparent hover:bg-gray-50 hover:text-gray-900 group hover:no-underline" activeClassName="text-indigo-600 border-l-4 border-indigo-600 bg-indigo-50">
            Components
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
