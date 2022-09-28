import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

type Props = {}
const Home = (props: Props) => {


    return (
        <main className='h-screen w-full flex' >

            {/* sidebar */}
            <div className='w-[252px] bg-white border-r-[1px] border-[#EFEAF0] relative top-0 left-0'>
                <Sidebar />
            </div>

            <div>
                <Outlet />
            </div>



        </main>
    )
}

export default Home