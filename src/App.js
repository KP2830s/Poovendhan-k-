import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Accessories from './Accessories';
import Bicycles from './Bicycles';
import Bar from "./navbar";
import Footer from './Footer';
import Mainn from './Main';
import About from './About';
import Contactus from './Contactus';
import { CartProvider } from './CartContext';
import AllProductPage from './AllProductPage';
import ViewCart from './ViewCart';
import CheckOutPage from './CheckOutPage';
import AdminLoginpage from './admin/AdminLoginpage';
import Admindasboard from './admin/admind_ashboard/Admindasboard';
import AdminNavbar from './admin/admind_ashboard/AdminNavbar';
import ErrorBoundary from './ErrorBoundary';
import ProdcutDiscrption from './ProdcutDiscrption';


function App() {

  const location = useLocation();
  const isAdminDashboard = location.pathname.startsWith('/admindasboard');
  // const isAdminDashboard = ['/admindasboard','/adminnavbar'].includes(location.pathname);

  return (
    <>
    <CartProvider>
      { !isAdminDashboard && 
      <ErrorBoundary>
        <Bar />
      </ErrorBoundary> }{/* Nav at top on all pages */}
      
      <Routes>
        <Route path='/' element={<Mainn />} />
        <Route path="/bicycles" element={<Bicycles />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/allproductpage' element={<AllProductPage />} />
        {/* <Route path="/allproduct/:id" element={<ProdcutDiscrption />} /> */}
        <Route path="/allproduct/:id" element={<ProdcutDiscrption />} />
        <Route path='/viewcart' element={<ViewCart />} />
        <Route path='/checkoutpage' element={<CheckOutPage />} />
        <Route path='/adminloginpage' element={<AdminLoginpage />} />
        {/* <Route path='/admindasboard' element={<Admindasboard />} /> */}
        <Route path='/admindasboard/*' element={<Admindasboard />} />
        <Route path='/adminnavbar/*' element={<AdminNavbar />} />
       
      </Routes>
      { !isAdminDashboard && <Footer /> }{/* Footer on all pages */}
    </CartProvider>

    </>
  );
}

export default App;
