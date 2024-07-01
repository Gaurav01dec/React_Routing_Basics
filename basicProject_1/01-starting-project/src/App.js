import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Layout from './pages/Layout';
import Error404 from './pages/Error404';
import Bar from './pages/Bar';
import ProductDetails from './pages/ProductDetails';
// ALTERNATIVE APPROACH
// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/Product' element={<Product />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinations)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement :<Error404/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Product', element: <Product /> },
      { path: '/Product/:productID', element: <ProductDetails /> },
      { path: '/Bar', element: <Bar /> }
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />;
}
export default App;
