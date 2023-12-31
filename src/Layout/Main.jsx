import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div>
      {noHeaderFooter || <Navbar />}

      <Outlet></Outlet>

      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
