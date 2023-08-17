import React from "react";
import { HomeModernIcon , CalendarIcon, StarIcon, UserCircleIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import logo from '../images/new-logo-cp.png'

const menuItems = [
  {
    id: 'Dashboard',
    icon: HomeModernIcon,
    tooltip: 'This is your homepage'
  },
  {
    id: 'Fixtures',
    icon: CalendarIcon,
    tooltip: 'Check your upcoming fixture list'
  },
  {
    id: 'League Table',
    icon: StarIcon,
    tooltip: 'Current League information'
  },
  {
    id: 'My Information',
    icon: UserCircleIcon,
    tooltip: 'Stats'
  },
  {
    id: 'Stream',
    icon: HandRaisedIcon,
    tooltip: 'Watch current live streams'
  },
]

export default function SideNav() {
  return <div className="border border-gray-100 shadow-lg p-2">
    <div className="flex flex-col justify-between w-full align-middle items-center">
      <div className="mt-2 mb-4">
        <img src={logo} className="w-16" />
      </div>
      {menuItems.map(item => {
        return (<div className="text-xs p-3 bg-violet-100 rounded-lg m-2 text-violet-800 hover:cursor-pointer hover:bg-violet-800 hover:text-white">
          <item.icon className="text-xs h-6 w-6" />
        </div>)
      })}

    </div>
  </div>;
}
