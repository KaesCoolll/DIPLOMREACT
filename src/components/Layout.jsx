import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/main.css';
import { AuthProvider } from '../context/AuthContext';

function Layout() {
  return (
    <AuthProvider>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default Layout;