import React, { Suspense } from 'react'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Notfound from './components/Notfound'
import ProtectedRoute from './components/ProtectedRoute'
import AuthContextProvider from './contexts/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { Offline } from 'react-detect-offline'
import { lazy } from 'react';
import Loadingscreen from './components/Loadingscreen'
import BrandProducts from './components/BrandsProducts'
import CategoriesProducts from './components/CategoriesProducts'

const Home = lazy(() => import('./components/Home'));
const Products = lazy(() => import('./components/Products'));
const Categories = lazy(() => import('./components/Categories'));
const Cart = lazy(() => import('./components/Cart'));
const Wish = lazy(() => import('./components/Wish'));
const Brands = lazy(() => import('./components/Brands'));
const Allorders = lazy(() => import('./components/Allorders'));
const ShippingAddress = lazy(() => import('./components/ShippingAddress'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const Forget = lazy(() => import('./components/Forget'));
const ResetPassword = lazy(() => import('./components/ResetPassword'));
const NewPassword = lazy(() => import('./components/NewPassword'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
















let query = new QueryClient();



export default function App() {

  let routes = createHashRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Home></Home></Suspense> },
      { path: '/products', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Products></Products></Suspense> },
      { path: '/categories', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Categories></Categories></Suspense> },
      { path: '/cart', element: <ProtectedRoute><Suspense fallback={<Loadingscreen></Loadingscreen>}><Cart></Cart></Suspense></ProtectedRoute> },
      { path: '/wish', element: <ProtectedRoute><Suspense fallback={<Loadingscreen></Loadingscreen>}><Wish></Wish></Suspense></ProtectedRoute> },
      { path: '/brands', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Brands></Brands></Suspense> },
      { path: '/allorders', element: <ProtectedRoute><Suspense fallback={<Loadingscreen></Loadingscreen>}><Allorders></Allorders></Suspense></ProtectedRoute> },
      { path: '/shippingaddress/:cartId', element: <ProtectedRoute><ShippingAddress></ShippingAddress></ProtectedRoute> },
      { path: '/productdetails/:id/:category', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><ProductDetails></ProductDetails></Suspense> },
      { path: '/brands/:brandId/:brandName', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><BrandProducts></BrandProducts></Suspense> },
      { path: '/categories/:categoryId/:categoryName', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><CategoriesProducts></CategoriesProducts> </Suspense> },
  
      // <Route path="/categories/:categoryId/:categoryName" element={<CategoryProducts />} /
      // <Route path="/brands/:brandId/:brandName" element={<BrandProducts />} />
      { path: '/login', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Login></Login></Suspense> },
      { path: '/register', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Register></Register></Suspense> },
      { path: '/forget', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><Forget></Forget></Suspense> },
      { path: '/reset', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><ResetPassword></ResetPassword></Suspense> },
      { path: '/newpassword', element: <Suspense fallback={<Loadingscreen></Loadingscreen>}><NewPassword></NewPassword></Suspense> },
      { path: '*', element: <Notfound></Notfound> },

    ]
  }])
  return (
    <QueryClientProvider client={query} >
      <AuthContextProvider>

        <RouterProvider router={routes} ></RouterProvider>
        <ToastContainer />
        <Offline>
          <div className="fixed bottom-4 start-4 p-4 rounded-md bg-blue-950 text-white">
            Only show offline (surprise!)
          </div>
        </Offline>


      </AuthContextProvider>

    </QueryClientProvider>



  )
}
