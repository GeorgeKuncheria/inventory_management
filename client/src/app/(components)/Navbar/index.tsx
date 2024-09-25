'use-client';

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react"
import Link from "next/link";


const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);
  
    const toggleSidebar= ()=>{
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }

    const isDarkMode=useAppSelector((state)=> state.global.isDarkMode);


    const toggelDarkMode=()=>{
        dispatch(setIsDarkMode(!isDarkMode))
    }
  
  return (
    <div className="flex justify-between mb-7 items-center w-full ">
        {/* LEFT SIDE */}
        <div className="flex justify-between items-center gap-5">
            <button className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" 
            onClick={toggleSidebar}
            >
                <Menu className="w-4 h-4"/>
            </button>
        
            <div className="relative">
                <input type='search' 
                placeholder="Start type to search for groups and products" 
                className="search-bar"/> 

                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Bell className="text-gray-500" size={20}/>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex justify-between items-center gap-5">
                <div>
                    <button onClick={toggelDarkMode}>
                        {isDarkMode ? 
                            (<Sun className="cursor-pointer text-gray-500 " size={24}/>)
                            :
                            (<Moon className="cursor-pointer text-gray-500" size={24}/>)
                    }
                    </button>
                </div>
                <div className="relative">
                    <Bell className="cursor-pointer text-gray-500" size={24}/>
                    <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] px-1 text-sx font-semibold leading-none text-red-100 bg-red-400 rounded-full">
                        3
                    </span>
                </div>
                <hr className="h-7 w-0 border-solid border-l border-gray-300 mx-3"/>
                <div className='flex items-center gap-3 cursor-pointer '>
                    <div className="w-9 h-9">
                        Image
                    </div>
                    <span className='font-semibold'>George K</span>
                </div>
            </div>
            <Link href='/settings'>
                <Settings className='cursor-pointer text-gray-500' size={24}/>
            </Link>
        </div>

    </div>
  )
}

export default Navbar