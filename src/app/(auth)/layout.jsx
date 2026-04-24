import NavbarPage from '@/components/shared/Navbar';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavbarPage />
      {children}
    </div>
  );
};

export default AuthLayout;
