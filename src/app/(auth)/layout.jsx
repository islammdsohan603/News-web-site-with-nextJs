import NavbarPage from '@/components/shared/Navbar';
import { montserrat } from '../layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <NavbarPage />
      <ToastContainer position="top-right" autoClose={3000} />
      {children}
    </div>
  );
};

export default AuthLayout;
