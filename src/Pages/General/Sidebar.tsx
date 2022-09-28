import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import overviewIcon from '../../Assets/dashboard-icon.svg'
import overviewIconActive from '../../Assets/dashboard-icon-active.svg'
import financeIcon from '../../Assets/finance-icon.svg'
import financeIconActive from '../../Assets/finance-icon-active.svg'
import ordersIcon from '../../Assets/orders-icon.svg'
import ordersIconActive from '../../Assets/orders-icon-active.svg'
import profileIcon from '../../Assets/profile-icon.svg'
import profileIconActive from '../../Assets/profile-icon-active.svg'
import settingsIcon from '../../Assets/settings-icon.svg'
import settingsIconActive from '../../Assets/settings-icon-active.svg'
import path from 'path'



const Sidebar = () => {

 

  return (
    <aside className='overflow-y-hidden relative h-screen w-full grid grid-rows-[71px_auto] gap-[96px] mt-4'>

      <div className='bg-[#FAF9FB] py-5 pl-8 pr-[66px]'>
        <p className='font-medium text-header2 leading-8 text-[23px] '>Sidiclo Delivery</p>
      </div>

      <div className='ml-4 mr-5 flex flex-col gap-2'>

        {/* overview */}
        <SidebarItem icon={overviewIcon} iconActive={overviewIconActive} path={'/dashboard/overview'} itemName={'Overview'} />
        <SidebarItem icon={ordersIcon} iconActive={ordersIconActive} path={'/dashboard/orders'} itemName={'Orders'} />
        <SidebarItem icon={financeIcon} iconActive={financeIconActive} path={'/dashboard/finance'} itemName={'Finance'} />
        <SidebarItem icon={profileIcon} iconActive={profileIconActive} path={'/dashboard/profile'} itemName={'Profile'} />
        <SidebarItem icon={settingsIcon} iconActive={settingsIconActive} path={'/dashboard/settings'} itemName={'Settings'} />

      </div>

    </aside>
  )
}

export default Sidebar

type Props = {
  icon: any
  iconActive: any
  itemName: string
  path: string
}
const SidebarItem = (props:Props) => {

  const url = useLocation()
  const { pathname } = url
  const pathnames = pathname.split('/').filter(x => x)

  return (
    <Link className={`relative`} to={props.path}>
          {props.path.split('/').filter(x=>x).every(ai => pathnames.includes(ai)) && <div className={`bg-primary h-[40px] w-[90%] rounded-l-[8px]  absolute left-[-2px] right-0`}></div>}

          
          <div className={`${props.path.split('/').filter(x=>x).every(ai => pathnames.includes(ai)) ? "bg-[#F6F2F7] text-primary " : "bg-white text-body1" }  relative w-full pt rounded-l-lg rounded-r-lg z-10 flex gap-2 items-center py-2 pl-[14px]`}>
            
            <img src={ !props.path.split('/').filter(x=>x).every(ai => pathnames.includes(ai)) ? props.icon : props.iconActive} alt='overview-icon' />
            <h1>{props.itemName}</h1>
          </div>


        </Link>

  )
}