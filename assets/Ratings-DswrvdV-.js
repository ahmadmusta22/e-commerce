import{a as r}from"./axios-DTyqpfTh.js";import{B as o,H as l,j as t}from"./index-DMYuyo0K.js";async function c(e,s){let{data:a}=await r.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:e},{headers:{token:localStorage.getItem("userToken")}});console.log(a),o.success(a.message,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:l})}function m({ratings:e}){return t.jsxs("div",{className:"flex items-center mt-2.5 mb-5",children:[[1,2,3,4,5].map(s=>t.jsx("svg",{className:e>=s?"w-5 h-5 text-yellow-300":" w-5 h-5 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})})),t.jsx("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3",children:e})]})}export{m as R,c as a};