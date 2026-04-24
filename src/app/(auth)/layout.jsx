import NavbarPage from '@/components/shared/Navbar';

import { montserrat } from '../layout';

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <NavbarPage />
      {children}
    </div>
  );
};

export default AuthLayout;
