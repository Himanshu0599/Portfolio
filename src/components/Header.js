// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const navigation = [
//   { name: 'HOME', href: '/', current: true },
//   { name: 'TOOLS AND SKILLS', href: '/skills', current: false },  
//   { name: 'PROJECTS', href: '/projects', current: false },
//   { name: 'CONTACT', href: '/contact', current: false },
// ];

// export default function Example() {
//   return (
//     <nav className="bg-gray-800 fixed top-0 left-0 w-full z-50">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-start h-16">
//           <div className="hidden sm:ml-6 sm:block">
//             <div className="p-4 pl-[48rem] items-end flex space-x-6 text-white">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="hover:text-blue-500"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

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
            <div className="p-4 pl-[45rem] gap-5 items-end flex space-x-9 text-white mb-12 space-y-4 mt-5">
              {navigation.map((item) => (
                // item.isButton ? (
                //   <button key={item.name} className="hover:bg-blue-500 hover:text-white rounded mt-2">
                //     <a
                //       href={item.href}
                //       target="_blank"
                //       rel="noreferrer"
                //       className="flex gap-2 justify-center items-center bg-black btn-primary px-2 py-2 rounded mt-2"
                //     >
                //       <svg
                //         stroke="currentColor"
                //         fill="none"
                //         strokeWidth="2"
                //         viewBox="0 0 24 24"
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         className="text-xl mt-[0.13rem]"
                //         height="0.8em"
                //         width="1em"
                //         xmlns="http://www.w3.org/2000/svg"
                //       >
                //         <polyline points="8 17 12 21 16 17"></polyline>
                //         <line x1="12" y1="12" x2="12" y2="21"></line>
                //         <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                //       </svg>
                //       Resume
                //     </a>
                //   </button>
              //  ) : (
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


