import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; FixAll Home Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
