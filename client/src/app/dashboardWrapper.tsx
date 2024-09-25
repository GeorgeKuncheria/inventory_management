'use client'
import { ReactNode, useEffect } from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar/index'
import StoreProvider, { useAppSelector } from './redux'


const DashboardLayout = ({children}:{children:ReactNode})=> {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);

  const isDarkMode=useAppSelector((state)=> state.global.isDarkMode);

  useEffect(()=>{
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
  }
  else {
      document.documentElement.classList.add('light')
}},[]);

  return (
    <div className={ `${isDarkMode ? "dark" :"light"} flex bg-gray-50 text-gray-900 w-full min-h-full`}>
        <Sidebar/>
        <main className={`flex flex-col w-full h-full px-9 py-7 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72" }`}>
            <Navbar/>
            {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}:{children:ReactNode})=> {
  return (
   <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
   </StoreProvider>
  )
}

export default DashboardWrapper