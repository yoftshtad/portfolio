import React from 'react'
import { FiHome } from "react-icons/fi";



import Link from "next/link";
import Button from '../components/Button'

export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
            <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <div className='flex gap-5 items-center'>
                <Link href='/' className="border-r border-amber-950 pr-3 text-gray-600 hover:text-emerald-600 transition-colors"><FiHome /></Link>
                <Link href='/#projects' className="text-gray-700 hover:text-emerald-600 transition-colors">Projects</Link>
                <Link href='/#skills' className="text-gray-700 hover:text-emerald-600 transition-colors">Experience</Link>
                <Link href='/#contact' className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</Link>
            </div>
            <div>
                <Button 
                    text='Hire Now'
                    href='https://t.me/Yoftsh_ui'
                    target="_blank"
                    rel="noopener noreferrer"
                    />
                    
            </div>
            
           

            
            </div>
        </nav>
    );
}