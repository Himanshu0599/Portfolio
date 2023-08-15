
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'SKILLS', href: '/skills', current: false },  
  { name: 'PROJECTS', href: '/projects', current: false },
  { name: 'CONTACT', href: '/contact', current: false },
  { name: 'RESUME', href: 'https://drive.google.com/uc?id=1Mh3jjpXgMLipZYbVw139XKYx1iefpnTu', isButton: true },
  

];

export default function Example() {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="hidden sm:ml-6 sm:block">
            <div className="p-4 pl-[45rem] gap-5 mt-[34px] items-end flex space-x-9 text-white mb-12 space-y-4">
              {navigation.map((item) => (
                 <Link
                    key={item.name}
                    to={item.href}
                    className="flex  space-x-5 hover:text-blue-500 "
                  >
                    {item.name}
                  </Link>
               // )
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


